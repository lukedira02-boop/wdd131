/* =========================================
   WILDLIFE & BIRD WATCHING GUIDE
   WDD 131 PROJECT
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuButton =
    document.querySelector(".menu-button");

const mainNav =
    document.querySelector(".main-nav");


if (menuButton && mainNav) {

    menuButton.addEventListener("click", () => {

        const isOpen =
            mainNav.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

    });

}


/* =========================================
   BIRD DATA
========================================= */

const birds = [

    {
        name: "African Fish Eagle",

        habitat: "wetland",

        description:
            "A large raptor commonly associated with lakes, rivers, and other water-rich habitats.",

        clue:
            "Look near water and watch for a strong hooked bill and broad wings."
    },


    {
        name: "Malachite Kingfisher",

        habitat: "wetland",

        description:
            "A small colorful kingfisher often found close to water where it can hunt for fish.",

        clue:
            "Check quiet water edges and branches used as hunting perches."
    },


    {
        name: "Village Weaver",

        habitat: "urban",

        description:
            "A social weaver that can be seen around gardens, farms, wetlands, and settlements.",

        clue:
            "Look for active colonies and carefully woven hanging nests."
    },


    {
        name: "Grey Crowned Crane",

        habitat: "grassland",

        description:
            "A distinctive crane associated with open habitats and wetlands.",

        clue:
            "Its tall shape and crown-like head markings make it easier to recognize."
    },


    {
        name: "African Paradise Flycatcher",

        habitat: "woodland",

        description:
            "A woodland bird known for its elegant appearance and active insect hunting.",

        clue:
            "Watch shaded trees for quick movements between branches."
    },


    {
        name: "Common Bulbul",

        habitat: "urban",

        description:
            "A familiar garden and woodland bird that feeds on fruit, insects, and other food sources.",

        clue:
            "Listen for calls in gardens, shrubs, and leafy areas."
    }

];


/* =========================================
   FILTER BIRDS
========================================= */

function getBirdsByHabitat(habitat) {

    if (habitat === "all") {

        return birds;

    }

    return birds.filter(
        bird => bird.habitat === habitat
    );

}


/* =========================================
   DISPLAY BIRDS
========================================= */

function renderBirds(list) {

    const directory =
        document.querySelector("#bird-directory");


    if (!directory) {

        return;

    }


    if (list.length === 0) {

        directory.innerHTML =
            "<p>No birds were found for this habitat.</p>";

        return;

    }


    directory.innerHTML = list.map(
        bird => `

        <article class="card">

            <div
                class="bird-art bird-one"
                role="img"
                aria-label="${bird.name} illustration">
            </div>

            <div class="card-body">

                <p class="eyebrow">
                    ${bird.habitat}
                </p>

                <h2>
                    ${bird.name}
                </h2>

                <p>
                    ${bird.description}
                </p>

                <p>
                    <strong>
                        Identification clue:
                    </strong>

                    ${bird.clue}
                </p>

            </div>

        </article>

        `
    ).join("");

}


/* =========================================
   HABITAT FILTER EVENT
========================================= */

const habitatFilter =
    document.querySelector("#habitat-filter");


if (habitatFilter) {

    renderBirds(birds);


    habitatFilter.addEventListener(
        "change",
        event => {

            const selectedHabitat =
                event.target.value;

            const filteredBirds =
                getBirdsByHabitat(
                    selectedHabitat
                );

            renderBirds(filteredBirds);

        }
    );

}


/* =========================================
   BEST WATCHING TIME
========================================= */

function getBestWatchingTime(
    season,
    weather
) {

    if (weather === "windy") {

        return `
            Early morning is usually a better choice
            because strong wind can make observation
            and listening more difficult later.
        `;

    }


    if (weather === "light-rain") {

        return `
            Consider waiting for a break in the rain.
            Quiet periods after light rain can be useful
            for observing bird activity.
        `;

    }


    if (
        season === "dry" &&
        weather === "clear"
    ) {

        return `
            Try early morning or the final hours before
            sunset when temperatures are more comfortable.
        `;

    }


    if (
        season === "wet" &&
        weather === "cloudy"
    ) {

        return `
            Try a calm morning after poor weather has
            passed, while keeping local trail and
            safety conditions in mind.
        `;

    }


    return `
        Early morning is a practical starting point
        because many birds are active and temperatures
        are often more comfortable.
    `;

}


/* =========================================
   RECOMMENDATION BUTTON
========================================= */

const recommendButton =
    document.querySelector(
        "#recommend-button"
    );


if (recommendButton) {

    recommendButton.addEventListener(
        "click",
        () => {

            const season =
                document.querySelector(
                    "#season"
                ).value;


            const weather =
                document.querySelector(
                    "#time-weather"
                ).value;


            const recommendation =
                document.querySelector(
                    "#recommendation"
                );


            const result =
                getBestWatchingTime(
                    season,
                    weather
                );


            recommendation.innerHTML = `

                <strong>
                    Recommendation:
                </strong>

                <p>
                    ${result}
                </p>

            `;

        }
    );

}


/* =========================================
   LOCAL STORAGE
========================================= */

function getSavedSightings() {

    return JSON.parse(
        localStorage.getItem(
            "birdSightings"
        )
    ) || [];

}


/* =========================================
   SAVE SIGHTING
========================================= */

function saveSighting(sighting) {

    const sightings =
        getSavedSightings();


    sightings.push(sighting);


    localStorage.setItem(
        "birdSightings",
        JSON.stringify(sightings)
    );

}


/* =========================================
   DISPLAY SAVED SIGHTINGS
========================================= */

function renderSightings() {

    const container =
        document.querySelector(
            "#saved-sightings"
        );


    if (!container) {

        return;

    }


    const sightings =
        getSavedSightings();


    if (sightings.length === 0) {

        container.innerHTML = `
            <p>
                No sightings saved yet.
                Record your first observation above.
            </p>
        `;

        return;

    }


    container.innerHTML =
        sightings.map(
            (sighting, index) => `

            <article class="sighting-item">

                <h3>
                    ${sighting.birdName}
                </h3>

                <p>
                    <strong>
                        Location:
                    </strong>

                    ${sighting.location}
                </p>

                <p>
                    <strong>
                        Date:
                    </strong>

                    ${sighting.date}
                    at
                    ${sighting.time}
                </p>

                <p>
                    <strong>
                        Weather:
                    </strong>

                    ${sighting.weather}
                </p>

                <p>
                    <strong>
                        Notes:
                    </strong>

                    ${sighting.notes}
                </p>

                <small>
                    Sighting #${index + 1}
                </small>

            </article>

            `
        ).join("");

}


/* =========================================
   SIGHTING FORM
========================================= */

const sightingForm =
    document.querySelector(
        "#sighting-form"
    );


if (sightingForm) {

    renderSightings();


    sightingForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const formData =
                new FormData(
                    sightingForm
                );


            const sighting = {

                birdName:
                    formData.get(
                        "birdName"
                    ),

                location:
                    formData.get(
                        "location"
                    ),

                date:
                    formData.get(
                        "date"
                    ),

                time:
                    formData.get(
                        "time"
                    ),

                weather:
                    formData.get(
                        "weather"
                    ),

                notes:
                    formData.get(
                        "notes"
                    )

            };


            saveSighting(
                sighting
            );


            renderSightings();


            document.querySelector(
                "#form-message"
            ).textContent =
                "Your bird sighting was saved on this device.";


            sightingForm.reset();

        }
    );

}


/* =========================================
   CLEAR SAVED SIGHTINGS
========================================= */

const clearButton =
    document.querySelector(
        "#clear-sightings"
    );


if (clearButton) {

    clearButton.addEventListener(
        "click",
        () => {

            const sightings =
                getSavedSightings();


            if (sightings.length > 0) {

                localStorage.removeItem(
                    "birdSightings"
                );


                renderSightings();


                const message =
                    document.querySelector(
                        "#form-message"
                    );


                if (message) {

                    message.textContent =
                        "Your saved sightings have been cleared.";

                }

            }

        }
    );

}