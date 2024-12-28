import React, { useState, useEffect } from "react";
import "./WeatherApp.css";
import { CardBody, CardContainer, CardItem } from "./ThreeDCard"; // Adjust the path based on your project structure
import { motion } from "framer-motion";

function WeatherApp({ city }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState();

  const apiKey = "493ba78095c9ef2b8abe4963f67999ed";

  // Function to fetch weather data
  const fetchWeather = async (cityName) => {
    try {
      setError(null); // Clear any previous errors
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("City not found or API error");
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null); // Clear weather data if there's an error
    }
  };

  // Fetch weather when the city changes
  useEffect(() => {
    if (city) {
      fetchWeather(city);
    }
  }, [city]);

  return (
    <CardContainer>
      <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }}>
        <CardBody className="weather-card bg-gray-50 group dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border shadow-lg">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {/* <div className="weather-container">
            <h1 className="text-2xl font-bold">{weather.name}</h1>
            <h2 className="text-xl">Local Time: {localTime}</h2>
          </div> */}
          </CardItem>

          {error && (
            <CardItem translateZ="100" className="error-message text-red-500">
              {error}
            </CardItem>
          )}

          {weather && (
            <>
              <CardItem translateZ="60" className="weather-container">
                <h1 className="text-2xl font-bold">{weather.name}</h1>
                <h2 className="text-xl">{Math.round(weather.main.temp)}°C</h2>
                <p>Chance of rain: {weather.clouds.all}%</p>
                <p>Weather: {weather.weather[0].description}</p>
              </CardItem>

              <CardItem translateZ="100" className="mt-4">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                  className="h-16 w-16 object-contain"
                />
              </CardItem>
            </>
          )}

          <div className="flex justify-between items-center mt-6">
            <CardItem
              translateZ={20}
              as="a"
              href="https://openweathermap.org/"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              {/* Visit OpenWeather → */}
            </CardItem>
            {/* <CardItem
            translateZ={20}
            as="button"
            onClick={() => fetchWeather(city)}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Refresh
          </CardItem> */}
          </div>
        </CardBody>
      </motion.div>
    </CardContainer>
  );
}

export default WeatherApp;
