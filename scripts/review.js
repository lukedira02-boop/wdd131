document.addEventListener("DOMContentLoaded", () => {


const counter =
document.querySelector("#counter");


let reviewCount =
Number(localStorage.getItem("reviewCount-ls")) || 0;



if(counter){

counter.textContent = reviewCount;

}



// Footer Year

const year =
document.querySelector("#currentyear");


if(year){

year.textContent =
new Date().getFullYear();

}



// Last Modified

const modified =
document.querySelector("#lastModified");


if(modified){

modified.textContent =
`Last Modified: ${document.lastModified}`;

}


});