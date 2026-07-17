const temp = 5;
const wind = 10;

function calculateWindChill(temp, wind) {
    return (13.12 + 0.6215 * temp - 11.37 * wind ** 0.16 + 0.3965 * temp * wind ** 0.16).toFixed(1);
}

const windChill = document.querySelector("#windChill");

if (temp <= 10 && wind > 4.8) {
    windChill.textContent = `${calculateWindChill(temp, wind)} °C`;
} else {
    windChill.textContent = "N/A";
}

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;