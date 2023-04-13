import React from "react";
function WeatherForecastWeek(props) {
  return (
    <div className="WeatherForecastWeek">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastWeek-day">
            icon <img src={props.data.img} alt="Italian Trulli" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecastWeek;
