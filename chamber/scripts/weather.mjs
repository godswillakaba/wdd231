const apiKey = "19680d95b8aa7b171b017434767a47c1";

const weatherURL =
`https://api.openweathermap.org/data/2.5/weather?lat=5.6037&lon=-0.1870&units=metric&appid=${apiKey}`;



export async function loadWeather() {

    const response = await fetch(weatherURL);

    const data = await response.json();

    console.log(data);

    // Temperature
    document.querySelector("#accra-temp").textContent =
        `${Math.round(data.main.temp)}°C`;

    // Description
    document.querySelector("#accra-desc").textContent =
        data.weather[0].description;

    // High temp
    document.querySelector("#high-temp").textContent =
        `${Math.round(data.main.temp_max)}°C`;

    // Low temp
    document.querySelector("#low-temp").textContent =
        `${Math.round(data.main.temp_min)}°C`;

    // Humidity
    document.querySelector("#humidity").textContent =
        `${data.main.humidity}%`;

    // Weather icon
    const icon = document.querySelector("#weather-icon");

    icon.src =
        `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    icon.alt = data.weather[0].description;

    // Sunrise
    const sunrise = new Date(data.sys.sunrise * 1000);

    document.querySelector("#sunrise").textContent =
        sunrise.toLocaleTimeString();

    // Sunset
    const sunset = new Date(data.sys.sunset * 1000);

    document.querySelector("#sunset").textContent =
        sunset.toLocaleTimeString();
}