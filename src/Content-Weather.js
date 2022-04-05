import React, { useState } from "react";
import axios from "axios";

import "./Content-Weather.css";
import "./Media.css";
import FormatingDate from "./FormatingDate";
import FormatingSunrise from "./FormatingSunrise";

export default function ContentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      imgUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      sunrise: new Date(response.data.sys.sunrise * 1000),
    });
    console.log(response);
  }
  function search() {
    const units = "metric";
    const apiKey = "c263b408beea5a53bf5cae8b844890fd";
    const apiEndPoint = "https://api.openweathermap.org/data/2.5/weather?q=";
    let apiUrl = `${apiEndPoint}${props.value}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <small className="small">Last updated:</small>
        <div className="date">
          {" "}
          <FormatingDate date={weatherData.date} />
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
                      alt={weatherData.description}
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
                      <div className="sunrise-value">
                        {" "}
                        <FormatingSunrise sunrise={weatherData.sunrise} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "";
  }
}
