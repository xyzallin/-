import React, { useState, useEffect } from "react";
import WeatherForcast from "./WeatherForcast"; // Import your WeatherForcast card component

const WeatherForecastSlider = ({ lat, lon }) => {
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [error, setError] = useState(null);

  const apiKey = "c5b61ccff93a4d44ab7161834242812"; // Your WeatherAPI key

  const fetchHourlyWeather = async (latitude, longitude) => {
    try {
      setError(null); // Clear any previous errors
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&days=2&aqi=no&alerts=no`
      );

      if (!response.ok) {
        throw new Error("Unable to fetch weather data");
      }

      const data = await response.json();

      // Get current time in ISO format for comparison
      const currentTime = new Date().toISOString();

      // Flatten hourly forecast for both days
      const allHourlyData = data.forecast.forecastday.flatMap(
        (day) => day.hour
      );

      // Filter data to only include times from current hour onward
      const futureHourlyData = allHourlyData.filter(
        (hour) => hour.time >= currentTime
      );

      setHourlyForecast(futureHourlyData); // Store future hourly forecast in state
    } catch (err) {
      setError(err.message);
      setHourlyForecast([]);
    }
  };

  useEffect(() => {
    if (lat && lon) {
      fetchHourlyWeather(lat, lon);
    }
  }, [lat, lon]);

  return (
    <div className="forecast-slider">
      {error && <p className="error-message text-red-500">{error}</p>}

      {hourlyForecast.length > 0 && (
        <div className="slider-container">
          <div
            className="scrollable-container"
            style={{ height: "200px", display: "flex" }}
          >
            {hourlyForecast.map((hour, index) => (
              <WeatherForcast
                key={index}
                time={hour.time} // Use the time string from the API
                temp={Math.round(hour.temp_c)} // Temperature in Celsius
                description={hour.condition.text} // Weather condition description
                icon={hour.condition.icon} // URL for the weather icon
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherForecastSlider;
