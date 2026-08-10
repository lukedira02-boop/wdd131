// Fallback loader for broken images: tries alternate filenames/extensions
(function () {
  var exts = ['.jpg', '.jpeg', '.png', '.webp', '.svg'];

  function unique(arr) { return Array.from(new Set(arr)); }

  function normalizeFilename(name) {
    return name.toLowerCase().replace(/(\.jpg)+(\.jpeg)?$/i, '.jpg');
  }

  function makeCandidates(src) {
    try { var url = new URL(src, location.href); } catch (e) { return []; }
    var isRemote = url.protocol === 'http:' || url.protocol === 'https:';
    if (isRemote) {
      // For absolute remote URLs, don't generate local-relative candidates
      return [src];
    }
    var path = url.pathname;
    var base = path.replace(/\/[^/]*$/, '').replace(/^\//, '') + '/';
    var name = path.split('/').pop();
    var stem = name.replace(/\.[^/.]+$/, '');

    var candidates = [];
    // Keep original first
    candidates.push(src);

    // If double extension like .jpg.jpg, try single
    candidates.push(src.replace(/(\.jpg){2,}$/i, '.jpg'));

    // Try removing common suffixes like -temple
    if (stem.match(/-temple$/i)) {
      candidates.push(src.replace(/-temple/i, ''));
    }

    // Try common extensions
    exts.forEach(function (ext) {
      candidates.push((new URL(base + stem + ext, location.href)).href);
      // also try stem with -temple removed
      if (stem.indexOf('-temple') !== -1) {
        candidates.push((new URL(base + stem.replace(/-temple/i, '') + ext, location.href)).href);
      }
    });

    // If filename contains repeated .jpg.jpg or .jpg.jpeg, try stripping extra
    candidates = candidates.map(function (s) { return s.replace(/(\.jpg)+(\.jpeg)?$/i, '.jpg'); });

    return unique(candidates);
  }

  function tryCandidates(img, candidates, i) {
    if (i >= candidates.length) {
      img.classList.add('image-missing');
      return;
    }
    img.onerror = function () { tryCandidates(img, candidates, i + 1); };
    img.src = candidates[i];
  }

  function init() {
    var imgs = document.querySelectorAll('img');
    imgs.forEach(function (img) {
      var orig = img.getAttribute('src') || '';
      if (!orig) return;

      // Build initial candidate list from predictable transformations
      var candidates = makeCandidates(orig);

      // If an image manifest is available, use it to find matching filenames
      try {
        var manifest = window.__IMAGE_MANIFEST || [];
        if (manifest && manifest.length) {
          var requestedName = (function () {
            try { return (new URL(orig, location.href)).pathname.split('/').pop().toLowerCase(); } catch (e) { return orig.toLowerCase(); }
          })();
          var reqStem = requestedName.replace(/\.[^/.]+$/, '');

          var filteredManifest = manifest.filter(function (m) {
            return typeof m === 'string' && !m.trim().match(/^https?:\/\//i);
          });

          var matches = filteredManifest.filter(function (m) {
            var mlow = m.toLowerCase();
            var mstem = mlow.replace(/\.[^/.]+$/, '');
            return mlow.indexOf(reqStem) !== -1 || reqStem.indexOf(mstem) !== -1 || mstem === reqStem;
          });

          // For each match, try several relative locations based on the original path
          if (matches.length) {
            var baseDir = (function () {
              try { var p = (new URL(orig, location.href)).pathname; return p.replace(/[^/]*$/, ''); } catch (e) { return 'images/'; }
            })();

            matches.forEach(function (fname) {
              var variants = [];
              // same directory as original
              variants.push(baseDir + fname);
              // common alternative directories
              variants.push('/images/' + fname);
              variants.push('images/' + fname);
              variants.push('project/images/' + fname);
              variants.push('../images/' + fname);
              variants.forEach(function (v) { candidates.push(v); });
            });
          }
        }
      } catch (e) {
        // manifest absent or error — ignore
      }
      // Remove the original from candidate head if browser already tried it
      if (candidates.length > 1) {
        // Start after the current src so we don't retry the first immediately
        var startIndex = 0;
        if (candidates[0] === (new URL(img.src, location.href)).href) startIndex = 1;

        // If image failed to load synchronously, attempt replacements right away
        setTimeout(function () {
          if (!img.complete || img.naturalWidth === 0) {
            tryCandidates(img, candidates, startIndex);
          }
        }, 50);
      }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
