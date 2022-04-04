import React from "react";
import "./Search.css";
import "./Media.css";

export default function Search() {
  return (
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
      <form className="search-form">
        <input
          className="search-box"
          type="search"
          placeholder="Type city"
          autoComplete="off"
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
  );
}
