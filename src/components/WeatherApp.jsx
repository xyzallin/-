import React, { useState, useEffect } from "react";
import "./WeatherApp.css";
import { CardBody, CardContainer, CardItem } from "./ThreeDCard"; // Adjust the path based on your project structure
import { motion } from "framer-motion";
import detective_animation_404_error_page from "../detective-animation-404-error-page.gif";
// import { CircleLoader } from "react-awesome-loaders";

function WeatherApp({ city, updateCoordinates }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // New loading state

  const apiKey = "493ba78095c9ef2b8abe4963f67999ed";
  // Function to fetch weather data
  const fetchWeather = async (cityName) => {
    setLoading(true); // Set loading state to true while fetching
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
      if (data.coord) {
        updateCoordinates(data.coord.lat, data.coord.lon);
      }
    } catch (err) {
      setError(err.message);
      setWeather(null); // Clear weather data if there's an error
    } finally {
      setLoading(false); // Set loading state to false when done
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
      <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} key={city}>
        <CardBody className="weather-card bg-gray-50 group dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border shadow-lg">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {/* You can add any other static content here */}
          </CardItem>

          {loading && (
            <CardItem translateZ="40" className="loading-container">
              <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }}>
                {/* <CircleLoader
                  meshColor={"#6366F1"}
                  lightColor={"#E0E7FF"}
                  duration={1.5}
                  desktopSize={"90px"}
                  mobileSize={"64px"}
                /> */}
                <div class="loader" style={{ marginLeft: "-65px" }}></div>
              </motion.div>
            </CardItem>
          )}

          {error && !loading && (
            <CardItem translateZ="40" className="error-container">
              <motion.div
                animate={{ x: 0, scale: 1 }}
                initial={{ x: 250, scale: 0 }}
              >
                <img
                  src={detective_animation_404_error_page} // Adjust the path if necessary
                  alt="No city found"
                  className="h-32 w-32 object-contain mx-auto"
                  style={{
                    width: "150px", // Set custom width
                    height: "150px", // Set custom height
                    objectFit: "contain", // Maintain aspect ratio
                    margin: "auto", // Center the image
                    mixBlendMode: "multiply", // Blends the image with the background (does not remove the background)
                    backgroundColor: "black", // Background color behind the image
                  }}
                />
              </motion.div>

              <p className="text-red-500 mt-4">{error}</p>
            </CardItem>
          )}

          {weather && !loading && (
            <>
              <CardItem translateZ="100" className="weather-container">
                <motion.div
                  animate={{ y: 0, opacity: 1 }}
                  initial={{ y: 100, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div style={{ top: "-10px" }}>
                    <h2 className="text-2xl font-bold">{weather.name}</h2>
                    <p>Chance of rain: {weather.clouds.all}%</p>
                  </div>
                </motion.div>
              </CardItem>

              <CardItem translateZ="250" className="weather-container">
                <motion.div
                  animate={{ y: 0, opacity: 1 }}
                  initial={{ y: -100, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div>
                    <h2 className="text-xl">
                      {Math.round(weather.main.temp)}°C
                    </h2>
                    <p>Weather: {weather.weather[0].description}</p>
                  </div>
                </motion.div>
              </CardItem>

              <CardItem translateZ="150" className="mt-4">
                <motion.div
                  animate={{ scale: 1 }}
                  initial={{ scale: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt={weather.weather[0].description}
                    className="h-16 w-16 object-contain"
                  />
                </motion.div>
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
          </div>
        </CardBody>
      </motion.div>
    </CardContainer>
  );
}

export default WeatherApp;
