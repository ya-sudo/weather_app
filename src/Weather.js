import { useState } from "react";
import axios from "axios";
import "./Weather.css";
function Weather() {
  const [city, setCity] = useState("");
  const [weathercity, setWeather] = useState({});
  // const [temp, setTemp] = useState(null);
  const [loaded, setLoaded] = useState(false);

  //Feature #1 In your project, display the current date and time using JavaScript: Tuesday 16:00

  /*  let date = new Date(); */

  /* let weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]; */

  function updateCity(event) {
    setCity(event.target.value);
    console.log(setCity, event.target.value);
  }
  function handelSubmit(event) {
    event.preventDefault();
    let apiKey = "25fad9f7e87157d33dde0f82ab269ee8";

    let apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    //found temperature
    function displayWeather(response) {
      setLoaded(true);

      //setTemp(response.data.main.humidity);
      setWeather({
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        temperatura: response.data.main.temp,
      });
    }
    console.log(axios.get(apiCall));

    console.log(axios.get(apiCall).then(displayWeather));
  }

  if (loaded) {
    return (
      <div className="Weather container">
        <form id="search-form" onSubmit={handelSubmit}>
          <div className="dFlex">
            <input
              className="form-control inputForm"
              type="search"
              placeholder="Type a city.."
              id="city-input"
              onChange={updateCity}
            />

            <input className="btn btn-primary" type="submit" value="Search" />
          </div>
        </form>

        <ul>
          <li>
            <h1 id="city">{city}</h1>
          </li>
          <li className="sottoTitolo" id="date">
            Sunday 09:50
          </li>
          <li className="sottoTitolo">Partly Cloudy</li>
        </ul>
        <div>
          <div>
            <div>
              <div>
                <span id="temperature">{weathercity.temperatura}</span>
                <span>
                  <a href="/" id="celsius-link">
                    °C
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div>
            <ul>
              <li>humidity: {weathercity.humidity}</li>
              <li>Wind: {weathercity.wind}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Weather container">
        <form id="search-form" onSubmit={handelSubmit}>
          <div className="dFlex">
            <input
              className="form-control inputForm"
              type="search"
              placeholder="Type a city.."
              id="city-input"
              onChange={updateCity}
            />

            <input className="btn btn-primary" type="submit" value="Search" />
          </div>
        </form>

        <ul>
          <li>
            <h1 id="city">Sidney</h1>
          </li>
          <li className="sottoTitolo" id="date">
            Sunday 09:50
          </li>
          <li className="sottoTitolo">Partly Cloudy</li>
        </ul>
        <div>
          <div>
            6<span id="celsius-link">°C</span>
          </div>
          <div>
            <ul>
              <li>humidity: </li>
              <li>Wind: </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Weather;
