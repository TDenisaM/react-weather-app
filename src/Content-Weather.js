import React from "react";
import "./Content-Weather.css";
import "./Media.css";

export default function ContentWeather() {
  let weatherData = {
    city: "Bergen",
    country: "Norway",
    temperature: 10,
    day: "Tuesday",
    time: "10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
    sunrise: "6:30",
  };
  return (
    <div className="Weather">
      <small className="small">Last updated:</small>
      <div className="date">
        {weatherData.day} {weatherData.time}
      </div>
      <div className="container weather-content">
        <div className="row content">
          <div className="col-lg-7 today-left">
            <div className="card mb-3 today">
              <div className="row left">
                <div className="col-sm-7 weather-today-text">
                  <div className="city-weather">
                    <p className="city">{weatherData.city}</p>
                    <p className="country">{weatherData.country}</p>
                    <p className="current-temp">{weatherData.temperature}</p>
                    <p className="units">°C</p>
                  </div>
                </div>
                <div className="col-sm-5 weather-today-icon">
                  <img
                    src={weatherData.imgUrl}
                    className="img-fluid rounded-start todays-icon"
                    alt="{weatherData.description}"
                    width="170px"
                  />
                  <p>{weatherData.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 d-flex align-items-center mb-5 today-right ">
            <div className="card mb-3 today">
              <div className="row d-flex right">
                <div className="col-md-12 conditions">
                  <div className="col-md-12 wind">
                    <span className="align-middle">
                      <img
                        src="images/wind-icon.png"
                        className="img-fluid rounded-start wind-img"
                        alt="wind-emoji"
                        width="35px"
                      />
                    </span>
                    <p> Wind: </p>
                    <div className="wind-value">{weatherData.wind} m/s</div>
                  </div>
                  <div className="col-md-12 humidity">
                    <span className="align-middle">
                      <img
                        src="images/humidity-icon.png"
                        className="img-fluid rounded-start humidity-img"
                        alt="wind-emoji"
                        width="35px"
                      />
                    </span>
                    <p> Humidity: </p>
                    <div className="humidity-value">
                      {weatherData.humidity}%
                    </div>
                  </div>
                  <div className="col-md-12 sunrise">
                    <span className="align-middle">
                      <img
                        src="images/sunrise-icon.png"
                        className="img-fluid rounded-start sunrise-img"
                        alt="wind-emoji"
                        width="35px"
                      />
                      <p> Sunrise: </p>
                    </span>
                    <div className="sunrise-value">{weatherData.sunrise}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
