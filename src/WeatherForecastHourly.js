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
    <div className="WeatherForecastHourly">
      <div className="text-center dailyTime">
        {formatHourlyTime(props.data.dt)}
      </div>
      <div className="icon">
        <WeatherIcon
          code={props.data.weather[0].icon}
          alt={props.data.weather[0].description}
        />
      </div>
      <div className="text-center dailyTemperature">
        {Math.round(props.data.temp)}°
      </div>
    </div>
  );
}
