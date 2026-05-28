const apiKey = "19680d95b8aa7b171b017434767a47c1";

const forecastURL =
`https://api.openweathermap.org/data/2.5/forecast?lat=5.6037&lon=-0.1870&units=metric&appid=${apiKey}`;

export async function loadForecast() {

    const response = await fetch(forecastURL);
    const data = await response.json();

    console.log("Forecast data:", data);

    const forecastContainer = document.querySelector("#forecast-box");

    forecastContainer.innerHTML = "";

    //const forecastContainer = document.querySelector("#weather-forecast");

    //forecastContainer.innerHTML = "";

    // OpenWeather gives data every 3 hours → we pick one per day
    //const dailyData = data.list.filter(item =>
    //    item.dt_txt.includes("12:00:00")
   // ).slice(0, 3);

   // const labels = ["Today", "Tomorrow", "Next Day"];

  //  dailyData.forEach((day, index) => {

    //    const div = document.createElement("div");

    //    div.innerHTML = `
      //      <h4>${labels[index]}</h4>
        //    <p>${Math.round(day.main.temp)}°C</p>
    //        <p>${day.weather[0].description}</p>
   //     `;

   //     forecastContainer.appendChild(div);
   // });


    const forecastBox = document.querySelector("#forecast-box");


    forecastBox.innerHTML = ""; // clear old content
    data.list.slice(0, 3).forEach((item, index) => {


        const div = document.createElement("div");

        div.classList.add("forecast-day");


        div.innerHTML = `
            <p>${index === 0 ? "Today" : index === 1 ? "Tomorrow" : "Next Day"}</p>
            <p>${Math.round(item.main.temp)}°C</p>
            <p>${item.weather[0].description}</p>
        `;


        forecastBox.appendChild(div);
    });
}
