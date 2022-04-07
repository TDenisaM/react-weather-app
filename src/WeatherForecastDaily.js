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
    <div>
      <div>{formatForecastDays(props.data.day)}</div>
      <div className="icon">
        <WeatherIcon code={props.data.codeDaily} />
      </div>
      <div className="temperature">
        <span className="temperature-max">{props.data.temperatureMax}°</span>
        <span className="temperature-min">{props.data.temperatureMin}°</span>
      </div>
    </div>
  );
}
