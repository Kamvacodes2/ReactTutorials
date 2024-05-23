import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";

function WeatherApp() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const changeCityInput = (e) => {
    setCityName(e.target.value);
  };

  const fetchWeatherAPI = async () => {
    const API_key = '7ce84a258aa9db471068f2b9f678c309';
    const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`;

    try {
      const resp = await fetch(APIurl);
      if (!resp.ok) {
        throw new Error(`Error: ${resp.status} ${resp.statusText}`);
      }
      const respJson = await resp.json();

      // Convert temperature from Kelvin to Celsius
      if (respJson.main) {
        respJson.main.temp = respJson.main.temp - 273.15;
        respJson.main.temp_max = respJson.main.temp_max - 273.15;
        respJson.main.temp_min = respJson.main.temp_min - 273.15;
      }

      setWeatherData(respJson);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleMouseOut = () => {
    if (cityName) {
      fetchWeatherAPI();
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <h3 className="text-center text-success">React Weather App</h3>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter City Name"
              onChange={changeCityInput}
              onMouseOut={handleMouseOut}
              value={cityName}
            />
          </div>
          {/* Weather app info */}
          <WeatherInfo cityName={cityName} weatherData={weatherData} />
          {/* Weather app info */}
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
