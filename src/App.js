import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherApp from "./components/WeatherApp";
import Sidebar from "./components/sidebar";
import WeatherForecastSlider from "./components/WeatherForcastSlider";
import WeatherForcastWeekly from "./components/WeatherForcastWeekly";

import "./App.css"; // Import CSS for styling
import WeatherAnimation from "./components/WeatherAnimation";

function App() {
  const [searchCity, setSearchCity] = useState("Madrid"); // Default city
  const [Lat, setLat] = useState(40.4165);
  const [Lon, setLon] = useState(-3.7026);

  // Function to update the city name based on search input
  const handleSearch = (value) => {
    setSearchCity(value);
    console.log(value);
  };

  const updateCoordinates = (latitude, longitude) => {
    setLat(latitude);
    setLon(longitude);
  };

  return (
    <div className="app-container" style={{ display: "flex" }}>
      <Sidebar />
      <div className="main-content">
        <SearchBar placeholder="Search for cities" onSearch={handleSearch} />
        <WeatherApp city={searchCity} updateCoordinates={updateCoordinates} />
        <WeatherForecastSlider lat={Lat} lon={Lon} />
      </div>
      <WeatherForcastWeekly className="forecast-weekly" lat={Lat} lon={Lon} />
      <WeatherAnimation />
    </div>
  );
}

export default App;
