import React from "react";
import "./searchbar.css";

export default function Searchbar() {
  return (
    <nav className="navbar">
      <form className="form">
        <input type="text" id="city" value="city"></input>
      </form>
      <button className="btn">Search</button>
    </nav>
  );
}
