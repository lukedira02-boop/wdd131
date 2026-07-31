// Product Array Source Data
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Populate Product Select Options dynamically
document.addEventListener("DOMContentLoaded", () => {
  const selectElement = document.getElementById("product");

  if (selectElement) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id; // Using product's id for the value attribute
      option.textContent = product.name; // Displaying the product name
      selectElement.appendChild(option);
    });
  }

  // Set footer current year
  const yearElement = document.getElementById("currentyear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});