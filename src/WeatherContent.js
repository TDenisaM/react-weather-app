import React from "react";

import "./WeatherContent.css";
import "./Media.css";
import FormatingDate from "./FormatingDate";
import FormatingSunrise from "./FormatingSunrise";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherContent(props) {
  return (
    <div className="Weather">
      <small className="small">Last updated:</small>
      <div className="date">
        {" "}
        <FormatingDate currentDate={props.data.date} />
      </div>
      <div className="container weather-content">
        <div className="row content">
          <div className="col-lg-8 today-left">
            <div className="card mb-3 today">
              <div className="row left">
                <div className="col-sm-7 weather-today-text">
                  <div className="city-weather">
                    <p className="city">{props.data.city}</p>
                    <p className="country">{props.data.country}</p>
                    <div className="curent-temperature">
                      <WeatherTemperature
                        celsius={Math.round(props.data.temperature)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-5 weather-today-icon">
                  <WeatherIcon
                    code={props.data.icon}
                    alt={props.data.description}
                  />
                  <p className="mt-2">{props.data.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex align-items-center mb-5 today-right ">
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
                    <div className="wind-value">{props.data.wind} m/s</div>
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
                    <div className="humidity-value">{props.data.humidity}%</div>
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
                      <FormatingSunrise sunrise={props.data.sunrise} />
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
}
