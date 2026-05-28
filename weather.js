const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=19680d95b8aa7b171b017434767a47c1";

async function apiFetch() {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log(data); // for testing

      displayResults(data); // we will build this next
    } else {
      throw Error(await response.text());
    }

  } catch (error) {
    console.log(error);
  }
}
apiFetch();


function displayResults(data) {
  const temperature = data.main.temp;
  const desc = data.weather[0].description;
  const icon = data.weather[0].icon;

  currentTemp.textContent = `${temperature}°C`;
  captionDesc.textContent = desc;

  weatherIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${icon}@2x.png`
  );

  weatherIcon.setAttribute("alt", desc);
}