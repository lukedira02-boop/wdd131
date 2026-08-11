/* =========================================
   WILDLIFE & BIRD WATCHING GUIDE
   WDD 131 PROJECT - FULLY WORKING
========================================= */

// =========================================
// 1. MOBILE NAVIGATION (Works on all pages)
// =========================================
(function initMobileNav() {
    'use strict';
    
    const menuButton = document.querySelector(".menu-button");
    const mainNav = document.querySelector(".main-nav");

    if (menuButton && mainNav) {
        menuButton.addEventListener("click", function() {
            const isOpen = mainNav.classList.toggle("open");
            menuButton.setAttribute("aria-expanded", isOpen);
            menuButton.textContent = isOpen ? "✕" : "☰";
        });
    }
})();

// =========================================
// 2. BIRD DATA (Array of Objects)
// =========================================
const birds = [
    {
        name: "African Fish Eagle",
        habitat: "wetland",
        description: "A large raptor commonly associated with lakes, rivers, and other water-rich habitats.",
        clue: "Look near water and watch for a strong hooked bill and broad wings.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/African_fish_eagle_%28Haliaeetus_vocifer%29_Ethiopia.jpg/960px-African_fish_eagle_%28Haliaeetus_vocifer%29_Ethiopia.jpg",
        alt: "African Fish Eagle near a wetland"
    },
    {
        name: "Malachite Kingfisher",
        habitat: "wetland",
        description: "A small colorful kingfisher often found close to water where it can hunt for fish.",
        clue: "Check quiet water edges and branches used as hunting perches.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Common_Kingfisher_Alcedo_atthis.jpg/960px-Common_Kingfisher_Alcedo_atthis.jpg",
        alt: "Malachite Kingfisher perched near water"
    },
    {
        name: "Village Weaver",
        habitat: "urban",
        description: "A social weaver that can be seen around gardens, farms, wetlands, and settlements.",
        clue: "Look for active colonies and carefully woven hanging nests.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Village_weaver_%28Ploceus_cucullatus_cucullatus%29_male.jpg/960px-Village_weaver_%28Ploceus_cucullatus_cucullatus%29_male.jpg",
        alt: "Village Weaver near a nest"
    },
    {
        name: "Grey Crowned Crane",
        habitat: "grassland",
        description: "A distinctive crane associated with open habitats and wetlands.",
        clue: "Its tall shape and crown-like head markings make it easier to recognize.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Grey_crowned_crane_%28Balearica_regulorum_gibbericeps%29_Echuya_Uganda.jpg/960px-Grey_crowned_crane_%28Balearica_regulorum_gibbericeps%29_Echuya_Uganda.jpg",
        alt: "Grey Crowned Crane in Uganda"
    },
    {
        name: "African Paradise Flycatcher",
        habitat: "woodland",
        description: "A woodland bird known for its elegant appearance and active insect hunting.",
        clue: "Watch shaded trees for quick movements between branches.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/African_Paradise_Flycatcher_-_Kenya_NH8O0536_%2818822382274%29.jpg/960px-African_Paradise_Flycatcher_-_Kenya_NH8O0536_%2818822382274%29.jpg",
        alt: "African Paradise Flycatcher in woodland"
    },
    {
        name: "Common Bulbul",
        habitat: "urban",
        description: "A familiar garden and woodland bird that feeds on fruit, insects, and other food sources.",
        clue: "Listen for calls in gardens, shrubs, and leafy areas.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Common_bulbul_%28Pycnonotus_barbatus_barbatus%29.jpg/960px-Common_bulbul_%28Pycnonotus_barbatus_barbatus%29.jpg",
        alt: "Common Bulbul in garden"
    }
];

// =========================================
// 3. BIRD FILTER FUNCTION
// =========================================
function getBirdsByHabitat(habitat) {
    'use strict';
    
    if (habitat === "all") {
        return birds;
    }
    return birds.filter(function(bird) {
        return bird.habitat === habitat;
    });
}

// =========================================
// 4. RENDER BIRDS FUNCTION (Template Literals)
// =========================================
function renderBirds(birdList) {
    'use strict';
    
    const directory = document.querySelector("#bird-directory");
    if (!directory) return;

    if (birdList.length === 0) {
        directory.innerHTML = '<p>No birds were found for this habitat.</p>';
        return;
    }

    let html = '';
    for (var i = 0; i < birdList.length; i++) {
        var bird = birdList[i];
        var birdNum = (i % 3) + 1;
        html += `
            <article class="card">
                <figure class="bird-art bird-image" data-bird="${birdNum}">
                    <img 
                        src="${bird.image}" 
                        alt="${bird.alt || bird.name}" 
                        loading="lazy" 
                        decoding="async"
                        onerror="this.onerror=null;this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Crect fill=%22%232C5E3B%22 width=%22300%22 height=%22200%22/%3E%3Ctext x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22white%22 font-family=%22sans-serif%22 font-size=%2220%22%3E${bird.name}%3C/text%3E%3C/svg%3E'"
                    >
                </figure>
                <div class="card-body">
                    <p class="eyebrow">${bird.habitat}</p>
                    <h2>${bird.name}</h2>
                    <p>${bird.description}</p>
                    <p><strong>Identification clue:</strong> ${bird.clue}</p>
                </div>
            </article>
        `;
    }
    directory.innerHTML = html;
}

// =========================================
// 5. HABITAT FILTER EVENT (Only on birds.html)
// =========================================
(function initBirdFilter() {
    'use strict';
    
    var habitatFilter = document.querySelector("#habitat-filter");
    var directory = document.querySelector("#bird-directory");
    
    if (habitatFilter && directory) {
        renderBirds(birds);
        
        habitatFilter.addEventListener("change", function(event) {
            var filteredBirds = getBirdsByHabitat(event.target.value);
            renderBirds(filteredBirds);
        });
    }
})();

// =========================================
// 6. BEST WATCHING TIME (Conditional Branching)
// =========================================
function getBestWatchingTime(season, weather) {
    'use strict';
    
    if (weather === "windy") {
        return "Early morning is usually a better choice because strong wind can make observation and listening more difficult later.";
    }

    if (weather === "light-rain") {
        return "Consider waiting for a break in the rain. Quiet periods after light rain can be useful for observing bird activity.";
    }

    if (season === "dry" && weather === "clear") {
        return "Try early morning or the final hours before sunset when temperatures are more comfortable.";
    }

    if (season === "wet" && weather === "cloudy") {
        return "Try a calm morning after poor weather has passed, while keeping local trail and safety conditions in mind.";
    }

    return "Early morning is a practical starting point because many birds are active and temperatures are often more comfortable.";
}

// =========================================
// 7. RECOMMENDATION BUTTON (Only on field-notes.html)
// =========================================
(function initRecommendation() {
    'use strict';
    
    var recommendButton = document.querySelector("#recommend-button");
    var seasonEl = document.querySelector("#season");
    var weatherEl = document.querySelector("#time-weather");
    var recommendation = document.querySelector("#recommendation");
    
    if (recommendButton && seasonEl && weatherEl && recommendation) {
        recommendButton.addEventListener("click", function() {
            var result = getBestWatchingTime(seasonEl.value, weatherEl.value);
            recommendation.innerHTML = `
                <strong>Recommendation:</strong>
                <p>${result}</p>
            `;
        });
    }
})();

// =========================================
// 8. LOCAL STORAGE FUNCTIONS
// =========================================
function getSavedSightings() {
    'use strict';
    
    try {
        return JSON.parse(localStorage.getItem("birdSightings")) || [];
    } catch (e) {
        return [];
    }
}

function saveSighting(sighting) {
    'use strict';
    
    var sightings = getSavedSightings();
    sightings.push(sighting);
    localStorage.setItem("birdSightings", JSON.stringify(sightings));
}

// =========================================
// 9. RENDER SIGHTINGS (Template Literals)
// =========================================
function renderSightings() {
    'use strict';
    
    var container = document.querySelector("#saved-sightings");
    if (!container) return;

    var sightings = getSavedSightings();

    if (sightings.length === 0) {
        container.innerHTML = '<p>No sightings saved yet. Record your first observation above.</p>';
        return;
    }

    var html = '';
    for (var i = 0; i < sightings.length; i++) {
        var sighting = sightings[i];
        var num = i + 1;
        html += `
            <article class="sighting-item">
                <h3>${sighting.birdName || 'Unknown Bird'}</h3>
                <p><strong>Location:</strong> ${sighting.location || 'Unknown'}</p>
                <p><strong>Date:</strong> ${sighting.date || 'Unknown'} at ${sighting.time || 'Unknown'}</p>
                <p><strong>Weather:</strong> ${sighting.weather || 'Unknown'}</p>
                <p><strong>Notes:</strong> ${sighting.notes || 'No notes'}</p>
                <small>Sighting #${num}</small>
            </article>
        `;
    }
    container.innerHTML = html;
}

// =========================================
// 10. SIGHTING FORM (Only on field-notes.html)
// =========================================
(function initSightingForm() {
    'use strict';
    
    var sightingForm = document.querySelector("#sighting-form");
    var savedSightings = document.querySelector("#saved-sightings");
    
    if (!sightingForm || !savedSightings) return;

    renderSightings();

    sightingForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var formData = new FormData(sightingForm);
        var sighting = {
            birdName: formData.get("birdName") || '',
            location: formData.get("location") || '',
            date: formData.get("date") || '',
            time: formData.get("time") || '',
            weather: formData.get("weather") || '',
            notes: formData.get("notes") || ''
        };

        saveSighting(sighting);
        renderSightings();

        var formMessageEl = document.querySelector("#form-message");
        if (formMessageEl) {
            formMessageEl.textContent = "✅ Your bird sighting was saved on this device.";
            setTimeout(function() {
                formMessageEl.textContent = "";
            }, 5000);
        }

        sightingForm.reset();
    });
})();

// =========================================
// 11. CLEAR SIGHTINGS (Only on field-notes.html)
// =========================================
(function initClearSightings() {
    'use strict';
    
    var clearButton = document.querySelector("#clear-sightings");
    var savedSightings = document.querySelector("#saved-sightings");
    
    if (!clearButton || !savedSightings) return;
    
    clearButton.addEventListener("click", function() {
        var sightings = getSavedSightings();
        var formMessageEl = document.querySelector("#form-message");
        
        if (sightings.length > 0) {
            if (confirm("Are you sure you want to clear all saved sightings?")) {
                localStorage.removeItem("birdSightings");
                renderSightings();
                if (formMessageEl) {
                    formMessageEl.textContent = "🗑️ Your saved sightings have been cleared.";
                    setTimeout(function() {
                        formMessageEl.textContent = "";
                    }, 5000);
                }
            }
        } else {
            if (formMessageEl) {
                formMessageEl.textContent = "ℹ️ No sightings to clear.";
                setTimeout(function() {
                    formMessageEl.textContent = "";
                }, 3000);
            }
        }
    });
})();

// =========================================
// 12. CONSOLE LOG FOR DEBUGGING
// =========================================
console.log('✅ Wildlife & Bird Watching Guide - JavaScript loaded successfully!');
console.log('📊 Birds loaded:', birds.length);
console.log('📝 Sightings saved:', getSavedSightings().length);