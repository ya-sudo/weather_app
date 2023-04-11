import { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherComponent from "./WeatherComponent";
function Weather() {
  const [city, setCity] = useState("");
  const [weathercity, setWeather] = useState({});
  // const [temp, setTemp] = useState(null);
  const [loaded, setLoaded] = useState(false);

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
        description: response.data.weather[0].description,
        name: response.data.name,
        img: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      });
    }
    console.log(axios.get(apiCall));

    console.log(axios.get(apiCall).then(displayWeather));
  }

  if (loaded) {
    return (
      <div>
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

          <WeatherComponent data={weathercity} />
        </div>
        <span className="sottoTitolo">
          <a href="https://github.com/ya-sudo/weather_app"> Open-source code</a>
          , by Yani from
          <a href="https://www.shecodes.io/workshops?gclid=Cj0KCQjw27mhBhC9ARIsAIFsETGMlF1QEOPSI0hWOk6PisX1Pz1iUyEydmkePEWiLCZ5fg0SBRLBHhgaApU5EALw_wcB">
            She Codes
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
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
          {/* secondo blocco */}
          <div className="row">
            <div className="col-6 temperatura">
              <img
                src="https://openweathermap.org/img/wn/13d@2x.png"
                alt="Italian Trulli"
              />
              <span className="realTemp">6</span>
              <span id="celsius-link">°C</span>
            </div>
            <div className="col-6">
              <ul>
                <li className="sottoTitolo">Humidity: </li>
                <li className="sottoTitolo">Wind: </li>
              </ul>
            </div>
          </div>
        </div>
        <span className="sottoTitolo">
          <a href="https://github.com/ya-sudo/weather_app"> Open-source code</a>
          , by Yani from
          <a href="https://www.shecodes.io/workshops?gclid=Cj0KCQjw27mhBhC9ARIsAIFsETGMlF1QEOPSI0hWOk6PisX1Pz1iUyEydmkePEWiLCZ5fg0SBRLBHhgaApU5EALw_wcB">
            She Codes
          </a>
        </span>
      </div>
    );
  }
}
export default Weather;
