import React from "react";
import "./today.css";

export default function Today() {
  return (
    <div className="container container__today">
      <h1>Lisbon</h1>
      <h2>Today</h2>

      <div className="icon icon__today">
        <p>🌦</p>
      </div>
      <h4>description: cloudy</h4>
      <hr />
      <h3>Temperature: 18ºC</h3>
      <hr />
      <h4>wind: 7 Km/h</h4>
      <hr />
      <h4>humidity: 28%</h4>
      <hr />
    </div>
  );
}
