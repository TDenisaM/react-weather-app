import React, { useState } from "react";
import axios from "axios";

import WeatherContent from "./WeatherContent";

import "./Search.css";
import "./Media.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      imgUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      sunrise: new Date(response.data.sys.sunrise * 1000),
    });
  }

  function searchData() {
    const units = "metric";
    const apiKey = "c263b408beea5a53bf5cae8b844890fd";
    const apiEndPoint = "https://api.openweathermap.org/data/2.5/weather?q=";
    let apiUrl = `${apiEndPoint}${city}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateCity(event) {
    return setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchData();
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="Search">
          <h1 className="hello">
            Your weather
            <img
              className="logo"
              src="/images/weather-app.svg"
              alt=""
              width="175px 125px"
            />
          </h1>
          <form onSubmit={handleSubmit} className="search-form">
            <input
              className="search-box"
              type="search"
              placeholder="Type city"
              autoComplete="off"
              autoFocus="on"
              onChange={updateCity}
            />
            <input className="search-button" type="submit" value="Search" />
            <button
              type="button"
              className="btn btn-primary current-location-button"
            >
              Current Location
            </button>
          </form>
        </div>
        <WeatherContent data={weatherData} />
      </div>
    );
  } else {
    searchData();
    return "";
  }
}
