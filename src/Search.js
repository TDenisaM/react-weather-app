import React, { useState } from "react";

import ContentWeather from "./Content-Weather";

import "./Search.css";
import "./Media.css";

export default function Search() {
  let [city, setCity] = useState();
  let [showWeather, setShowWeather] = useState();

  function updateCity(event) {
    return setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    return setShowWeather(<ContentWeather value={city} />);
  }

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
      <div>{showWeather}</div>
    </div>
  );
}
