import React from "react";

import "./WeatherContent.css";
import "./Media.css";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <p className="current-temp">{Math.round(props.celsius)}</p>
      <span className="units">
        <span className="activeUnit">°C </span>
      </span>
    </div>
  );
}
