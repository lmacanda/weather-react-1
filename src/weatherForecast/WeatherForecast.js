import React from "react";
import "./weatherForecast.css";

export default function WeatherForecast() {
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
