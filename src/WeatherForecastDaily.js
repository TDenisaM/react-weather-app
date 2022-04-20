import React from "react";

import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";
import "./Media.css";

export default function WeatherForecastDaily(props) {
  function formatForecastDays(timestamp) {
    let forecastDays = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[forecastDays.getDay()];
    return `${day}`;
  }
  return (
    <div className="text-center">
      <div>{formatForecastDays(props.data.dt)}</div>
      <div className="icon">
        <WeatherIcon
          code={props.data.weather[0].icon}
          alt={props.data.weather[0].description}
        />
      </div>
      <div className="temperatureDaily">
        <span className="temperature-max">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="ms-2 temperature-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
