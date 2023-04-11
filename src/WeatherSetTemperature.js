import React, { useState } from "react";

function WeatherSetTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function tempFahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherSetTemperature">
        <span className="realTemp">{props.celsius}</span>
        <span id="celsius-link">
          °C
          <a href="/" onClick={convertToF}>
            | F°
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherSetTemperature">
        <span className="realTemp">{tempFahrenheit()}</span>
        <span id="celsius-link">
          <a href="/" onClick={convertToC}>
            °C
          </a>
          | F°
        </span>
      </div>
    );
  }
}

export default WeatherSetTemperature;
