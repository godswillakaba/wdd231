import { places } from "../data/discover.mjs";

const container = document.querySelector("#discover-cards");

places.forEach(place => {
    const card = document.createElement("article");

    card.classList.add("discover-card");

    card.innerHTML = `
    <h2>${place.name}</h2>

    <div class="content">
        <img src="${place.image}" alt="${place.name}" loading="lazy">

        <div class="text">
            <p>${place.description}</p>
            <address>${place.address}</address>
        </div>
    </div>

    <button>Learn More</button>
`;

    container.appendChild(card);
});


const visitorMessage = document.querySelector("#visitor-message");

const lastVisit = localStorage.getItem("lastVisit");
const currentVisit = Date.now();

let message;

if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
} else {
    const daysBetween = Math.floor(
        (currentVisit - Number(lastVisit)) / (1000 * 60 * 60 * 24)
    );

    if (daysBetween < 1) {
        message = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
        message = "You last visited 1 day ago.";
    } else {
        message = `You last visited ${daysBetween} days ago.`;
    }
}

visitorMessage.innerHTML = `
    <h2>Your Visit Information</h2>
    <p>${message}</p>
`;

localStorage.setItem("lastVisit", currentVisit);


