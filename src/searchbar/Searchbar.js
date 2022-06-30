import React from "react";
import "./searchbar.css";

export default function Searchbar() {
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
