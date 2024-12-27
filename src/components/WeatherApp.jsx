// import React, { useState, useEffect } from "react";
// import "./SearchBar.css";

// function WeatherApp() {
//   const [city, setCity] = useState("Madrid"); // Default city
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState(null);

//   const apiKey = "493ba78095c9ef2b8abe4963f67999ed";

//   // Function to fetch weather data
//   const fetchWeather = async (cityName) => {
//     try {
//       setError(null); // Clear any previous errors
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
//       );
//       console.log(cityName);

//       if (!response.ok) {
//         throw new Error("City not found or API error");
//       }

//       const data = await response.json();
//       setWeather(data);
//       console.log(data);
//     } catch (err) {
//       setError(err.message);
//       setWeather(null); // Clear weather data if there's an error
//     }
//   };

//   // Fetch weather when the city changes
//   useEffect(() => {
//     fetchWeather(city);
//   }, [city]);

//   const handleSearch = (value) => {
//     setCity(value); // Update city name
//   };

//   return (
//     <div className="weather-app">
//       {error ? (
//         <p className="error-message">Error: {error}</p>
//       ) : weather ? (
//         <div className="weather-container">
//           <h1>{weather.name}</h1>
//           <h2>{Math.round(weather.main.temp)}°C</h2>
//           <p>Chance of rain: {weather.clouds.all}%</p>
//           <p>Weather: {weather.weather[0].description}</p>
//         </div>
//       ) : (
//         <p>Loading weather data...</p>
//       )}
//     </div>
//   );
// }

// export default WeatherApp;

import React, { useState, useEffect } from "react";
import "./WeatherApp.css";

function WeatherApp({ city }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

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
    <div
      className="weather-app"
      style={{
        marginLeft: "100px",
        marginTop: "80px",
        width: "88vh",
        height: "35vh",
        display: "flex",
      }}
    >
      <h1>Weather</h1>
      {error && <p className="error-message">{error}</p>}
      {weather && (
        <div className="weather-container">
          <h1>{weather.name}</h1>
          <h2>{Math.round(weather.main.temp)}°C</h2>
          <p>Chance of rain: {weather.clouds.all}%</p>
          <p>Weather: {weather.weather[0].description}</p>
          {console.log(weather)}
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
