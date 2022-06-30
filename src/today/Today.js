import React, { useState } from "react";
import "./today.css";
import { RiTempHotLine } from "react-icons/ri";
import axios from "axios";
import FormattedDate from "../FormattedDate";

export default function Today(props) {
  const [weatherData, setWeatherData] = useState({
    ready: false,
  }); /* Create an object to store all the weather info */
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  if (weatherData.ready) {
    /* Use conditional statement if the object is ready display the info, else make an API call */
    return (
      <div className="container container__today">
        <h1>{weatherData.city}</h1>
        <h2>
          <FormattedDate date={weatherData.date} />
        </h2>

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
