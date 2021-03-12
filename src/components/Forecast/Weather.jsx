import React, { useEffect, useState } from "react";
// import Location from "./Location";

function Weather() {
  const [weatherData, setWeatherData] = useState();

  const apiKey = "fece7837721b5c411dc5a58133dff145";
  const units = "imperial";
  const cityId = "4782167";
  const url =
    "http://api.openweathermap.org/data/2.5/weather?" +
    "units=" +
    units +
    "&appid=" +
    apiKey +
    "&id=" +
    cityId;

  // (() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((response) => setWeatherData(response));
  // }, []);

  console.log(weatherData);
  console.log(weatherData.main.temp);
  console.log(weatherData.weather[0].description);

  const currentTemp = 1;
  // weatherData.main.temp
  const weatherDescription = 2;
  // weatherData.weather[0].description

  return (
    <div className="weather-container">
      <div className="row">
        <div className="inline">
          {weatherDescription} - {currentTemp}
        </div>
      </div>
    </div>
  );
}

export default Weather;
