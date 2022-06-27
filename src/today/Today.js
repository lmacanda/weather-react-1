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
      <h4>description</h4>
      <hr />
      <h3>Temperature</h3>
      <hr />
      <h4>wind</h4>
      <hr />
      <h4>humidity</h4>
      <hr />
    </div>
  );
}
