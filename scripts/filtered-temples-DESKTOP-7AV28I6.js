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
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Peru",
    location: "Lima, Peru",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-55508-main.jpg"
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-48475-main.jpg"
  },
  {
    templeName: "Nairobi Kenya Temple",
    location: "Nairobi, Kenya",
    dedicated: "2025, May, 18",
    area: 19800,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-62552-main.jpg"
  }
];

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

// Get dedication year
function getYear(temple) {
  return Number(temple.dedicated.split(",")[0]);
}

// Display all temples
displayTemples(temples);

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