import React from "react";
import "./today.css";
import { RiTempHotLine } from "react-icons/ri";
import axios from "axios";

export default function Today() {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "46b29bb09ed0ef009d3c22278289179e";
  let city = "lisbon";
  let units = "metric";
  let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather?q=";
  let apiUrl = `${apiEndPoint}${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);

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
