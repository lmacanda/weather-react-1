import React from "react";
import "./weatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  console.log(props);

  const apiKey = "46b29bb09ed0ef009d3c22278289179e";
  const units = "metric";
  let apiEndPoint = "https://api.openweathermap.org/data/2.5/onecall?";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `${apiEndPoint}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="weather__forecast">
      <article className="forecast_day">
        <h4>Monday</h4>
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
}
