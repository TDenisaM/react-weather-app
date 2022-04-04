import React from "react";
import "./Forecast.css";
import "./Media.css";

export default function Forecast() {
  let weatherHourly = {
    time: "10:00",
    day: "Thuesday",
    temperatureHourly: 10,
    temperatureMin: 10,
    temperatureMax: 10,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };
  return (
    <div className="Forecast">
      <div className="container">
        <div className="row align-items-center d-flex justify-content-evenly the-day">
          <div className="col-sm-2 now">
            <div>{weatherHourly.time}</div>
            <img src={weatherHourly.imgUrl} alt="" />
            <div>{weatherHourly.temperatureHourly}°</div>
          </div>
        </div>
        <div className="row align-items-center d-flex justify-content-evenly forecast-weather">
          <div className="col-sm-2 tue ">
            <div>{weatherHourly.day}</div>
            <img src={weatherHourly.imgUrl} alt="" />
            <div className="temperature">
              <span className="temperature-max">
                {weatherHourly.temperatureMax}°
              </span>
              <span className="temperature-min">
                {weatherHourly.temperatureMin}°
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
