import React from "react";
import "./searchbar.css";

export default function Searchbar() {
  return (
    <nav className="searchbar">
      <form className="form">
        <input
          type="search"
          id="city"
          value="Enter a city"
          aria-label="search"
        ></input>
        <button type="submit" value="search">
          search
        </button>
      </form>
    </nav>
  );
}
