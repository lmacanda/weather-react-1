import React from "react";
import { RiTempHotLine } from "react-icons/ri";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weather__info">
      <h1>{props.data.city}</h1>
      <h2>
        <FormattedDate date={props.data.date} />
      </h2>

      <div className="image__today">
        <img src={props.data.icon} alt={props.data.description} />
      </div>
      <h4>{props.data.description}</h4>
      <hr />
      <h3>
        <RiTempHotLine className="icon__temperature" />{" "}
        <span className="temperature">{props.data.temperature}</span>
        <span className="unit">°C</span>
      </h3>
      <hr />
      <h4>wind: {props.data.wind} Km/h</h4>
      <hr />
      <h4>humidity: {props.data.humidity}%</h4>
      <hr />
    </div>
  );
}
