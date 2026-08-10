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

const birds = [

    {
        name: "African Fish Eagle",
        habitat: "wetland",
        description: "A large raptor commonly associated with lakes, rivers, and other water-rich habitats.",
        clue: "Look near water and watch for a strong hooked bill and broad wings.",
        imageUrl: "images/fish-eagle.webp",
        remoteUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/African_fish_eagle_%28Haliaeetus_vocifer%29_Ethiopia.jpg/960px-African_fish_eagle_%28Haliaeetus_vocifer%29_Ethiopia.jpg",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/African_fish_eagle_%28Haliaeetus_vocifer%29_Ethiopia.jpg/960px-African_fish_eagle_%28Haliaeetus_vocifer%29_Ethiopia.jpg",
        alt: "African Fish Eagle near a wetland"
    },

    {
        name: "Malachite Kingfisher",
        habitat: "wetland",
        description: "A small colorful kingfisher often found close to water where it can hunt for fish.",
        clue: "Check quiet water edges and branches used as hunting perches.",
        imageUrl: "images/kingfisher.webp",
        remoteUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Common_Kingfisher_Alcedo_atthis.jpg/960px-Common_Kingfisher_Alcedo_atthis.jpg",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Common_Kingfisher_Alcedo_atthis.jpg/960px-Common_Kingfisher_Alcedo_atthis.jpg",
        alt: "Malachite Kingfisher perched near water"
    },

    {
        name: "Village Weaver",
        habitat: "urban",
        description: "A social weaver that can be seen around gardens, farms, wetlands, and settlements.",
        clue: "Look for active colonies and carefully woven hanging nests.",
        imageUrl: "images/village_weaver.jpg",
        remoteUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Village_weaver_%28Ploceus_cucullatus_cucullatus%29_male.jpg/960px-Village_weaver_%28Ploceus_cucullatus_cucullatus%29_male.jpg",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Village_weaver_%28Ploceus_cucullatus_cucullatus%29_male.jpg/960px-Village_weaver_%28Ploceus_cucullatus_cucullatus%29_male.jpg",
        alt: "Village Weaver near a nest"
    },

    {
        name: "Grey Crowned Crane",
        habitat: "grassland",
        description: "A distinctive crane associated with open habitats and wetlands.",
        clue: "Its tall shape and crown-like head markings make it easier to recognize.",
        imageUrl: "images/grey_crowned_crane.jpg",
        remoteUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Grey_crowned_crane_%28Balearica_regulorum_gibbericeps%29_Echuya_Uganda.jpg/960px-Grey_crowned_crane_%28Balearica_regulorum_gibbericeps%29_Echuya_Uganda.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Grey_crowned_crane_%28Balearica_regulorum_gibbericeps%29_Echuya_Uganda.jpg/960px-Grey_crowned_crane_%28Balearica_regulorum_gibbericeps%29_Echuya_Uganda.jpg",
        alt: "Grey Crowned Crane in Uganda"
    },

    {
        name: "African Paradise Flycatcher",
        habitat: "woodland",
        description: "A woodland bird known for its elegant appearance and active insect hunting.",
        clue: "Watch shaded trees for quick movements between branches.",
        imageUrl: "images/african_paradise_flycatcher.jpg",
        remoteUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/African_Paradise_Flycatcher_-_Kenya_NH8O0536_%2818822382274%29.jpg/960px-African_Paradise_Flycatcher_-_Kenya_NH8O0536_%2818822382274%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/African_Paradise_Flycatcher_-_Kenya_NH8O0536_%2818822382274%29.jpg/960px-African_Paradise_Flycatcher_-_Kenya_NH8O0536_%2818822382274%29.jpg",
        alt: "African Paradise Flycatcher in woodland"
    },

    {
        name: "Common Bulbul",
        habitat: "urban",
        description: "A familiar garden and woodland bird that feeds on fruit, insects, and other food sources.",
        clue: "Listen for calls in gardens, shrubs, and leafy areas.",
        imageUrl: "images/common_bulbul.jpg",
        remoteUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Common_bulbul_%28Pycnonotus_barbatus_barbatus%29.jpg/960px-Common_bulbul_%28Pycnonotus_barbatus_barbatus%29.jpg",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Common_bulbul_%28Pycnonotus_barbatus_barbatus%29.jpg/960px-Common_bulbul_%28Pycnonotus_barbatus_barbatus%29.jpg",
        alt: "Common Bulbul in garden"
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

            ${bird.image ? `
            <figure class="bird-art bird-one bird-image">
                <img src="${bird.image}" alt="${bird.alt || bird.name}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='images/hero.webp';">
            </figure>
            ` : `
            <div
                class="bird-art bird-one"
                role="img"
                aria-label="${bird.name} illustration">
            </div>
            `}

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

            const seasonEl = document.querySelector("#season");
            const weatherEl = document.querySelector("#time-weather");
            const recommendation = document.querySelector("#recommendation");

            const season = seasonEl ? seasonEl.value : "";
            const weather = weatherEl ? weatherEl.value : "";


            const result =
                getBestWatchingTime(
                    season,
                    weather
                );


            if (recommendation) {
                recommendation.innerHTML = `

                    <strong>
                        Recommendation:
                    </strong>

                    <p>
                        ${result}
                    </p>

                `;
            }

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


            const formMessageEl = document.querySelector("#form-message");
            if (formMessageEl) {
                formMessageEl.textContent = "Your bird sighting was saved on this device.";
            }


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