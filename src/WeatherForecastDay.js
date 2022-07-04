import React from "react";
import WeatherIcon from "./weatherIcon/WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = date.getDay();

    return days[day];
  }

  return (
    <article className="forecast_day">
      <div className="day">
        <h4>{day()}</h4>
      </div>
      <div className="forecast__icon">
        <WeatherIcon code={props.data.weather[0].icon} />{" "}
      </div>
      <div className="forecast__temperature">
        <span className="temp__max">{maxTemp()}</span>
        <span className="temp__min">{minTemp()}</span>
      </div>
    </article>
  );
}
