// Temple Data
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    // Select gallery
    const gallery = document.querySelector(".gallery");

    // Display temples
    function displayTemples(templeList) {
      gallery.innerHTML = "";

      templeList.forEach((temple) => {
        const card = document.createElement("section");
        card.classList.add("card");

        card.innerHTML = `
          <h3>${temple.templeName}</h3>

          <p><strong>Location:</strong> ${temple.location}</p>

          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>

          <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>

          <img
            src="${temple.imageUrl}"
            alt="${temple.templeName}"
            loading="lazy">
        `;

        gallery.appendChild(card);
      });
    }

    // Home
    document.querySelector("#home").addEventListener("click", () => {
      displayTemples(temples);
    });

    // Old Temples
    document.querySelector("#old").addEventListener("click", () => {
      const oldTemples = temples.filter((temple) => getYear(temple) < 1900);
      displayTemples(oldTemples);
    });

    // New Temples
    document.querySelector("#new").addEventListener("click", () => {
      const newTemples = temples.filter((temple) => getYear(temple) > 2000);
      displayTemples(newTemples);
    });

    // Large Temples
    document.querySelector("#large").addEventListener("click", () => {
      const largeTemples = temples.filter((temple) => temple.area > 90000);
      displayTemples(largeTemples);
    });

    // Small Temples
    document.querySelector("#small").addEventListener("click", () => {
      const smallTemples = temples.filter((temple) => temple.area < 10000);
      displayTemples(smallTemples);
    });

    // Footer
    document.querySelector("#year").textContent = new Date().getFullYear();

    document.querySelector("#lastModified").textContent =
      `Last Modified: ${document.lastModified}`;
    displayTemples(temples);
  });
}

// Old Temples
const oldBtn = document.querySelector("#old");
if (oldBtn) {
  oldBtn.addEventListener("click", () => {
    const oldTemples = temples.filter((temple) => getYear(temple) < 1900);
    displayTemples(oldTemples);
  });
}

// New Temples
const newBtn = document.querySelector("#new");
if (newBtn) {
  newBtn.addEventListener("click", () => {
    const newTemples = temples.filter((temple) => getYear(temple) > 2000);
    displayTemples(newTemples);
  });
}

// Large Temples
const largeBtn = document.querySelector("#large");
if (largeBtn) {
  largeBtn.addEventListener("click", () => {
    const largeTemples = temples.filter((temple) => temple.area > 90000);
    displayTemples(largeTemples);
  });
}

// Small Temples
const smallBtn = document.querySelector("#small");
if (smallBtn) {
  smallBtn.addEventListener("click", () => {
    const smallTemples = temples.filter((temple) => temple.area < 10000);
    displayTemples(smallTemples);
  });
}

// Footer
const yearEl = document.querySelector("#year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const lastModEl = document.querySelector("#lastModified");
if (lastModEl) {
  lastModEl.textContent = `Last Modified: ${document.lastModified}`;
}