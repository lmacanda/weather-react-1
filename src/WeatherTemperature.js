import React, { useState } from "react";
import { RiTempHotLine } from "react-icons/ri";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="weather__temperature">
        <h3>
          <RiTempHotLine className="icon__temperature" />{" "}
          <span className="temperature">{Math.round(props.celsius)}</span>
          <span className="unit">
            °C |
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>{" "}
          </span>
        </h3>
      </div>
    );
  } else {
    return (
      <div className="weather__temperature">
        <h3>
          <RiTempHotLine className="icon__temperature" />{" "}
          <span className="temperature">{Math.round(fahrenheit())}</span>
          <span className="unit">
            <a href="/" onClick={showCelsius}>
              °C
            </a>{" "}
            | °F
          </span>
        </h3>
      </div>
    );
  }
}
