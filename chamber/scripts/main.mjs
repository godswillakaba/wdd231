import { getMembers } from "./members.mjs";

import { getSpotlights } from "./spotlight.mjs";

import { displaySpotlights } from "./render.mjs";

import { loadWeather } from "./weather.mjs";

import { loadForecast } from "./forecast.mjs";



async function initializeSpotlights() {

    // Fetch all members
    const members = await getMembers();

    // Get random Gold/Silver members
    const spotlights = getSpotlights(members);

    // Display them
    displaySpotlights(spotlights);
}



// Run the function
initializeSpotlights();

loadWeather();

loadForecast();