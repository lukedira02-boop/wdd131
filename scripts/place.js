const temp = 8;
const wind = 12;


function calculateWindChill(temp, wind) {

    const temp = 8;
    const wind = 12;


    function calculateWindChill(temp, wind) {

        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(wind, 0.16) +
            0.3965 * temp * Math.pow(wind, 0.16)

        ).toFixed(1);

    }



    const windChill = document.querySelector("#windChill");
    if (temp <= 10 && wind > 4.8) {

        windChill.textContent =
            `${calculateWindChill(temp, wind)} °C`;

    }

    else {

        windChill.textContent = "N/A";

    }


    document.querySelector("#currentyear").textContent =
        new Date().getFullYear();


    document.querySelector("#lastModified").textContent =
        document.lastModified;