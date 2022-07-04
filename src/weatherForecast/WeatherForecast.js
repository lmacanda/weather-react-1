import React, { useState } from "react";
import "./weatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "../WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastInfo, setForecastInfo] = useState(null);
  function handleResponse(response) {
    setForecastInfo(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    /*data from an array[0] */
    return (
      <div className="weather__forecast">
        <WeatherForecastDay data={forecastInfo[0]} />
        <article className="forecast_day">
          <h4>Tuesday</h4>
          <img
            className="forecast__icon"
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
          ></img>
          <div className="forecast__temperature">
            <span className="temp__max">25° </span>
            <span className="temp__min">18°</span>
          </div>
        </article>
        <article className="forecast_day">
          <h4>Wednesady</h4>
          <img
            className="forecast__icon"
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
          ></img>
          <div className="forecast__temperature">
            <span className="temp__max">25° </span>
            <span className="temp__min">18°</span>
          </div>
        </article>
        <article className="forecast_day">
          <h4>Thursday</h4>
          <img
            className="forecast__icon"
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
          ></img>
          <div className="forecast__temperature">
            <span className="temp__max">25° </span>
            <span className="temp__min">18°</span>
          </div>
        </article>
        <article className="forecast_day">
          <h4>Friday</h4>
          <img
            className="forecast__icon"
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
          ></img>
          <div className="forecast__temperature">
            <span className="temp__max">25° </span>
            <span className="temp__min">18°</span>
          </div>
        </article>
      </div>
    );
  } else {
    const apiKey = "46b29bb09ed0ef009d3c22278289179e";
    const units = "metric";
    let apiEndPoint = "https://api.openweathermap.org/data/2.5/onecall?";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `${apiEndPoint}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
