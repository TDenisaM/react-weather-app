import React, { useState } from "react";
import axios from "axios";

import WeatherContent from "./WeatherContent";
import WeatherForecast from "./WeatherForecast.js";
import Footer from "./Footer.js";

import "./Media.css";
import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
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

  //current location botton

  function currentPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let units = "metric";
    let apiKey = "c263b408beea5a53bf5cae8b844890fd";
    let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather?";
    let apiUrl = `${apiEndPoint}lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentPosition);
  }

  //changing background

  function weatherBc() {
    const codeMapping = {
      "01d": "clear-sky-day",
      "01n": "clear-sky-night",
      "02d": "cloudy-day",
      "02n": "cloudy-night",
      "03d": "cloudy-day",
      "03n": "cloudy-night",
      "04d": "cloudy-day",
      "04n": "cloudy-night",
      "09d": "shower-rain-day",
      "09n": "shower-rain-night",
      "10d": "rain-day",
      "10n": "rain-night",
      "11d": "thunderstorm-day",
      "11n": "thunderstorm-night",
      "13d": "snow-day",
      "13n": "snow-night",
      "50d": "fog-day",
      "50n": "fog-night",
    };
    let name = codeMapping[weatherData.icon];
    let description = [weatherData.icon];
    return (
      <img
        src={`background/${name}.jpg`}
        alt={`${description}`}
        className="bg-img"
      />
    );
  }
  if (weatherData.ready) {
    return (
      <div className="Search">
        <div className="container justify-content-center cont">
          <div className="row justify-content-center">
            <div className="card text-white card-content">
              <div className="col-l-12">
                {weatherBc()}
                <div className="card-img-overlay wrapper-container">
                  <div className="container">
                    <div className="row">
                      <form onSubmit={handleSubmit} className="search-form">
                        <input
                          className="search-box"
                          type="search"
                          placeholder="Type city"
                          autoComplete="off"
                          autoFocus="on"
                          onChange={updateCity}
                        />
                        <button
                          type="submit"
                          className="input-group-text search-button"
                          id="basic-addon2"
                        >
                          <i className="fas fa-search"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary  current-location-button"
                          onClick={getCurrentPosition}
                        >
                          <i className="fa-solid fa-location-dot"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                  <WeatherContent data={weatherData} />
                  <WeatherForecast coordinates={weatherData.coordinates} />
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    searchData();
    return "";
  }
}
