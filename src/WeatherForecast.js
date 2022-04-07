import React, { useState } from "react";
import axios from "axios";

import WeatherForecastHourly from "./WeatherForecastHourly";
import WeatherForecastDaily from "./WeatherForecastDaily";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [weatherForecast, setWeatherForecast] = useState();

  function handleResponse(response) {
    setLoaded(true);
    console.log(response);
    setWeatherForecast({
      time: response.data.hourly[0].dt,
      day: response.data.hourly[0].dt,
      temperatureHourly: response.data.hourly[0].temp,
      temperatureMin: response.data.daily[0].temp.max,
      temperatureMax: response.data.daily[0].temp.min,
      codDaily: response.data.daily[0].weather[0].icon,
      descriptionDaily: response.data.daily[0].weather[0].description,
      codHourly: response.data.hourly[0].weather[0].icon,
      descriptionHourly: response.data.hourly[0].weather[0].description,
    });
  }

  if (loaded) {
    return (
      <div>
        <div className="Forecast">
          <div className="container">
            <div className="row align-items-center d-flex justify-content-evenly the-day">
              {weatherForecast.map(function (hourlyForecast, index) {
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
              {weatherForecast.map(function (dailyForecast, index) {
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
