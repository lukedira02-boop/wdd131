// Get current review count
let reviews = Number(localStorage.getItem("reviewCount")) || 0;

// Increment count
reviews++;

// Save back to localStorage
localStorage.setItem("reviewCount", reviews);

// Display count
document.querySelector("#reviewCount").textContent = reviews;

// Footer
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;