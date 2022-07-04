import React, { useState } from "react";
import "./weatherToday.css";
import axios from "axios";
import WeatherInfo from "../WeatherInfo";
import WeatherForecast from "../weatherForecast/WeatherForecast";

export default function Today(props) {
  const [weatherData, setWeatherData] = useState({
    ready: false,
  }); /* Create an object to store all the weather info */
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  function Search() {
    const apiKey = "46b29bb09ed0ef009d3c22278289179e";
    let units = "metric";
    let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather?q=";
    let apiUrl = `${apiEndPoint}${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
    //search for a city
    event.target.reset();
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    /* Use conditional statement if the object is ready display the info, else make an API call */
    return (
      <div className="container container__today">
        <WeatherInfo data={weatherData} />{" "}
        {/* Create props to send info to
        WeatherInfo component as props */}
        <WeatherForecast coordinates={weatherData.coordinates} />
        <form onSubmit={handleSubmit} className="form">
          <input
            type="search"
            placeholder="Enter a city"
            id="city"
            aria-label="search"
            autoFocus="on"
            onChange={changeCity}
          />
          <button className="btn btn-primary" type="submit" value="search">
            search
          </button>
        </form>
      </div>
    );
  } else {
    Search();
    return "Loading...";
  }
}
