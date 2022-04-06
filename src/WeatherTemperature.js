import React, { useState } from "react";

import "./WeatherContent.css";
import "./Media.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <p className="current-temp">{props.celsius}</p>
        <span className="units">
          <span className="activeUnit">°C </span>
          <span className="unactiveUnit">
            <a href="/" onClick={showFahrenheit}>
              °F{" "}
            </a>
          </span>
        </span>
      </div>
    );
  } else {
    return (
      <div clsssName="WeatherTemperature">
        <p className="current-temp">{fahrenheit()}</p>
        <span className="units">
          <span className="unactiveUnit">
            <a href="/" onClick={showCelsius}>
              °C
            </a>
          </span>
          <span className="activeUnit"> °F</span>
        </span>
      </div>
    );
  }
}
