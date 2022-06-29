import React, { useState } from "react";
import "./today.css";
import { RiTempHotLine } from "react-icons/ri";
import axios from "axios";

export default function Today(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Wednesday 17:40",
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container container__today">
        <h1>{weatherData.city}</h1>
        <h2>{weatherData.response}</h2>

        <div className="image__today">
          <img src={weatherData.icon} alt={weatherData.description} />
        </div>
        <h4>{weatherData.description}</h4>
        <hr />
        <h3>
          <RiTempHotLine className="icon__temperature" />{" "}
          <span className="temperature">{weatherData.temperature}</span>
          <span className="unit">°C</span>
        </h3>
        <hr />
        <h4>wind: {weatherData.wind} Km/h</h4>
        <hr />
        <h4>humidity: {weatherData.humidity}%</h4>
        <hr />
      </div>
    );
  } else {
    const apiKey = "46b29bb09ed0ef009d3c22278289179e";
    let units = "metric";
    let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather?q=";
    let apiUrl = `${apiEndPoint}${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
