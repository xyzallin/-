import React, { useState, useEffect } from "react";
import WeatherForcast from "./WeatherForcast"; // Import your WeatherForcast card component
import "./WeatherForcastSlider.css";
import { motion } from "framer-motion";

const WeatherForecastSlider = ({ lat, lon }) => {
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(false);

  const apiKey = "c5b61ccff93a4d44ab7161834242812"; // Your WeatherAPI key

  const fetchHourlyWeather = async (latitude, longitude) => {
    setloading(true);
    try {
      setError(null); // Clear any previous errors
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&days=2&aqi=no&alerts=no`
      );

      if (!response.ok) {
        throw new Error("Unable to fetch weather data");
      }

      const data = await response.json();

      const currentTime = new Date().toISOString();

      const allHourlyData = data.forecast.forecastday.flatMap(
        (day) => day.hour
      );

      const futureHourlyData = allHourlyData.filter(
        (hour) => hour.time >= currentTime
      );

      setHourlyForecast(futureHourlyData);
    } catch (err) {
      setError(err.message);
      setHourlyForecast([]);
    } finally {
      setloading(true);
    }
  };

  useEffect(() => {
    if (lat && lon) {
      fetchHourlyWeather(lat, lon);
    }
  }, [lat, lon]);

  // Motion variants for the card animation
  const cardVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      transition: { delay: index * 0.2, duration: 0.5 },
    }),
  };

  return (
    <div className="forecast-slider">
      {error && <p className="error-message text-red-500">{error}</p>}
      {loading && <div class="hourloader"></div>}

      {hourlyForecast.length > 0 && (
        <div
          key={`${lat}-${lon}`}
          className="slider-wrapper"
          style={{
            width: "94vh",
            marginLeft: "100px", // Keep or adjust width as needed
            overflow: "auto", // Enable both horizontal and hidden vertical scroll
            height: "38vh", // Keep consistent with your layout
            borderRadius: "25px",
            display: "flex",
            gap: "10px", // Add gap for space between cards
          }}
        >
          <div
            className="scrollable-container"
            style={{
              display: "flex",
              flexShrink: 0, // Prevent shrinking of cards
            }}
          >
            {hourlyForecast.map((hour, index) => (
              <motion.div
                key={index}
                custom={index} // Pass index to the animation
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <WeatherForcast
                  time={hour.time} // Use the time string from the API
                  temp={Math.round(hour.temp_c)} // Temperature in Celsius
                  description={hour.condition.text} // Weather condition description
                  icon={hour.condition.icon} // URL for the weather icon
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherForecastSlider;
