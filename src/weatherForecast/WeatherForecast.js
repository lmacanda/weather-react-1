import React, { useState, useEffect } from "react";
import "./weatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "../WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastInfo, setForecastInfo] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  // set loaded false
  // if the coordinates change

  function handleResponse(response) {
    setForecastInfo(response.data.daily);
    setLoaded(true);
  }

  function update() {
    const apiKey = "46b29bb09ed0ef009d3c22278289179e";
    const units = "metric";
    let apiEndPoint = "https://api.openweathermap.org/data/2.5/onecall?";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `${apiEndPoint}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    // data from an array[0]
    return (
      <div className="weather__forecast">
        {forecastInfo.map(function (dailyForecast, index) {
          if (index < 6) {
            return (
              <div key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  } else {
    update();

    return null;
  }
}
