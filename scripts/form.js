const products = [
    {
        id: "fc-1888",
        name: "Flux Capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power Laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time Circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "Low Voltage Reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp Equalizer",
        averagerating: 5.0
    }
];


// Populate Product Select

document.addEventListener("DOMContentLoaded", () => {


const productSelect = document.querySelector("#product");


products.forEach(product => {

    const option = document.createElement("option");

    option.value = product.name;

    option.textContent = product.name;

    productSelect.appendChild(option);

});



// Footer Year

const year = document.querySelector("#currentyear");

if (year) {

    year.textContent = new Date().getFullYear();

}



// Last Modified

const modified = document.querySelector("#lastModified");

if (modified) {

    modified.textContent =
    `Last Modified: ${document.lastModified}`;

}



});



// Count review when form is submitted

const form = document.querySelector("form");


if(form){

form.addEventListener("submit", () => {


let reviews =
Number(localStorage.getItem("reviewCount-ls")) || 0;


reviews++;


localStorage.setItem(
"reviewCount-ls",
reviews
);


});


}