import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/WeatherPage";
import HomePageCard from "./components/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/weather" element={<HomePage />} />
        <Route path="/" element={<HomePageCard />} />
        <Route path="/map" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
