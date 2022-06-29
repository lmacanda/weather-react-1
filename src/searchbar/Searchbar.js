import React from "react";
import "./searchbar.css";
import axios from "axios";

export default function Searchbar() {
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
    <form className="form">
      <input
        type="search"
        placeholder="Enter a city"
        id="city"
        aria-label="search"
        autoFocus="on"
      />
      <button className="btn btn-primary" type="submit" value="search">
        search
      </button>
    </form>
  );
}
