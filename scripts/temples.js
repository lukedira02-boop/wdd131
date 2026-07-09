const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");


// Mobile menu button
menuButton.addEventListener("click", () => {

    navigation.classList.toggle("show");

    if (menuButton.textContent === "☰") {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }

});


// Dynamic year
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();


// Last modified date
const modified = document.querySelector("#modified");

modified.textContent = document.lastModified;