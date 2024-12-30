import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CardContainer, CardItem, CardBody } from "./ThreeDCard";
import "./WeatherForcastWeekly.css";

const WeatherForcastWeekly = ({ lat, lon }) => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=c5b61ccff93a4d44ab7161834242812&q=${lat},${lon}&days=7`
        );
        const data = await response.json();

        const dailyForecasts = data.forecast.forecastday.map((day) => ({
          date: day.date,
          temp: day.day.avgtemp_c,
          icon: day.day.condition.icon,
          willItRain: day.day.condition.text,
        }));

        setForecastData(dailyForecasts);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [lat, lon]);

  // Motion variants for the card animation
  const cardVariants = {
    hidden: { opacity: 0, x: 70 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.2, duration: 0.5 },
    }),
  };

  return (
    <div
      key={`${lat}-${lon}`}
      style={{
        width: "100%",
        height: "80vh",
        overflowY: "auto",
        overflowX: "hidden",
        scrollbarWidth: "thin", // For Firefox
        scrollbarColor: "grey transparent", // For Firefox
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          scrollBehavior: "smooth",
        }}
      >
        {forecastData.length > 0 ? (
          forecastData.map((day, index) => (
            <motion.div
              key={index}
              custom={index} // Pass index to the animation
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <CardContainer style={{ flex: "0 0 auto" }}>
                <CardBody
                  className="weather-card card-body-small-wider"
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <CardItem
                    translateZ="1000"
                    className="weather-container"
                    style={{ textAlign: "center" }}
                  >
                    <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                      {day.date}
                    </p>
                  </CardItem>

                  <CardItem
                    translateZ="1000"
                    className="weather-container"
                    style={{ textAlign: "center" }}
                  >
                    <p style={{ marginBottom: "5px", fontSize: "2rem" }}>
                      {day.temp}°C
                    </p>
                  </CardItem>
                  <CardItem
                    translateZ="1000"
                    className="weather-container"
                    style={{ textAlign: "center" }}
                  >
                    <p
                      style={{ fontFamily: "revert-layer", fontSize: "1.2rem" }}
                    >
                      {day.willItRain}
                    </p>
                  </CardItem>
                  <CardItem
                    translateZ="1000"
                    className="weather-container"
                    style={{ textAlign: "center" }}
                  >
                    <img
                      src={day.icon}
                      alt="weather icon"
                      style={{ width: "50px", marginBottom: "10px" }}
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))
        ) : (
          <div className="weekloader"></div>
        )}
      </div>

      {/* Inline scrollbar styles for WebKit browsers */}
      <style>
        {`
          div::-webkit-scrollbar {
            width: 5px;
          }
          div::-webkit-scrollbar-thumb {
            background-color: grey;
            border-radius: 100px;
          }
          div::-webkit-scrollbar-track {
            background-color: transparent;
          }
        `}
      </style>
    </div>
  );
};

export default WeatherForcastWeekly;
