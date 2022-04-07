import React, { useState } from "react";
import axios from "axios";

import WeatherForecastHourly from "./WeatherForecastHourly";
import WeatherForecastDaily from "./WeatherForecastDaily";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [weatherForecastDaily, setWeatherForecastDaily] = useState(null);
  const [weatherForecastHourly, setWeatherForecastHourly] = useState(null);

  function handleResponse(response) {
    setLoaded(true);
    console.log(response);
    setWeatherForecastDaily(response.data.daily);
    setWeatherForecastHourly(response.data.hourly);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row align-items-center d-flex justify-content-evenly the-day">
          {weatherForecastHourly.map(function (hourlyForecast, index) {
            if (index < 7 && index > 0) {
              return (
                <div className="col-sm-2 now" key={index}>
                  <WeatherForecastHourly data={hourlyForecast} />
                </div>
              );
            }
          })}
        </div>
        <div className="row align-items-center d-flex justify-content-evenly forecast-weather">
          {weatherForecastDaily.map(function (dailyForecast, index) {
            if (index < 7 && index > 0) {
              return (
                <div className="col-sm-2 tue  " key={index}>
                  <WeatherForecastDaily data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let units = "metric";
    let apiKey = "c263b408beea5a53bf5cae8b844890fd";
    let apiEndPoint = "https://api.openweathermap.org/data/2.5/onecall?";
    let apiUrl = `${apiEndPoint}lat=${latitude}&lon=-${longitude}&units=${units}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
