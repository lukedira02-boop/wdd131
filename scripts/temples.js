// Select elements
const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");
const year = document.querySelector("#year");
const modified = document.querySelector("#modified");

// Mobile navigation toggle
if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("show");

        const isOpen = navigation.classList.contains("show");

        menuButton.textContent = isOpen ? "✖" : "☰";
        menuButton.setAttribute("aria-expanded", isOpen);
    });
}

// Display current year
if (year) {
    year.textContent = new Date().getFullYear();
}

// Display last modified date
if (modified) {
    modified.textContent = document.lastModified;
}