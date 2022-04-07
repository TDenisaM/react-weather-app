import React from "react";

import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";
import "./Media.css";

export default function WeatherForecastHourly(props) {
  function formatHourlyTime(timestamp) {
    let hoursDay = new Date(timestamp * 1000);
    let hours = String(hoursDay.getHours()).padStart(2, "0");
    let minutes = String(hoursDay.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  return (
    <div>
      <div>{formatHourlyTime(props.data.time)}</div>
      <div className="icon">
        <WeatherIcon
          code={props.data.codeHourly}
          alt={props.data.description}
        />
      </div>
      <div>{props.data.temperatureHourly}°</div>
    </div>
  );
}
