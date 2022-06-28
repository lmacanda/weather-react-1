import React from "react";
import "./today.css";
import { RiTempHotLine } from "react-icons/ri";

export default function Today() {
  return (
    <div className="container container__today">
      <h1>Lisbon</h1>
      <h2>Tuesday 19:31</h2>

      <div className="image__today">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          alt="sunny"
        />
      </div>
      <h4>sunny</h4>
      <hr />
      <h3>
        <RiTempHotLine className="icon__temperature" />{" "}
        <span className="temperature">18</span>
        <span className="unit">°C</span>
      </h3>
      <hr />
      <h4>wind: 7 Km/h</h4>
      <hr />
      <h4>humidity: 28%</h4>
      <hr />
    </div>
  );
}
