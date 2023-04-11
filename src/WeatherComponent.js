import React from "react";
import WeatherSetTemperature from "./WeatherSetTemperature";

function WeatherComponent(props) {
  return (
    <div className="WeatherComponent">
      <ul>
        <li>
          <h1 id="city">
            {/*  {city} */}
            {props.data.name}
          </h1>
        </li>
        <li className="sottoTitolo" id="date">
          Sunday 09:50
        </li>
        <li className="sottoTitolo">{props.data.description}</li>
      </ul>
      {/* mgdkmgd */}
      <div className="row">
        <div className="col-6 temperatura">
          <img src={props.data.img} alt="Italian Trulli" />
          <WeatherSetTemperature celsius={props.data.temperatura} />
        </div>
        <div className="col-6">
          <ul>
            <li className="sottoTitolo">Humidity:{props.data.humidity}</li>
            <li className="sottoTitolo">Wind:{props.data.wind} </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WeatherComponent;
