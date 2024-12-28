// // // import logo from "./logo.png";
// // // import "./App.css";
// // // import Sidebar from "./components/sidebar";
// // // import SearchBar from "./components/SearchBar";
// // // import moving_logo from "./moving_logo.png";
// // // import WeatherApp from "./components/WeatherApp";

// // // function App() {
// // //   return (
// // //     // <div className="App">
// // //     //   <header className="App-header">
// // //     //     <img src={logo} className="App-logo" alt="logo" />
// // //     //   </header>
// // //     // </div>

// // //     <>
// // //       <SearchBar placeholder="Search for cities" onSearch={handleSearch} />
// // //       <WeatherApp />
// // //       <Sidebar />
// // //     </>
// // //   );
// // // }

// // // export default App;

// // import logo from "./logo.png";
// // import "./App.css";
// // import Sidebar from "./components/sidebar";
// // import SearchBar from "./components/SearchBar";
// // import WeatherApp from "./components/WeatherApp";

// // import React, { useState } from "react";

// // function App() {
// //   const [searchCity, setSearchCity] = useState("Madrid"); // Default city

// //   // Function to update the city name based on search input
// //   const handleSearch = (value) => {
// //     setSearchCity(value);
// //   };

// //   return (
// //     <>
// //       <SearchBar placeholder="Search for cities" onSearch={handleSearch} />
// //       <Sidebar />
// //       <WeatherApp city={searchCity} />
// //     </>
// //   );
// // }

// // export default App;

// import React, { useState } from "react";
// import SearchBar from "./components/SearchBar";
// import WeatherApp from "./components/WeatherApp";
// import Sidebar from "./components/sidebar";

// function App() {
//   const [searchCity, setSearchCity] = useState("Madrid"); // Default city

//   // Function to update the city name based on search input
//   const handleSearch = (value) => {
//     setSearchCity(value);
//   };

//   return (
//     <>
//       <SearchBar placeholder="Search for cities" onSearch={handleSearch} />
//       <Sidebar />
//       <WeatherApp city={searchCity} />
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherApp from "./components/WeatherApp";
import Sidebar from "./components/sidebar";

// import WeatherForecastSlider from "./components/WeatherForcatSlider";
import WeatherForecastSlider from "./components/WeatherForcastSlider";

function App() {
  const [searchCity, setSearchCity] = useState("Madrid"); // Default city

  // Function to update the city name based on search input
  const handleSearch = (value) => {
    setSearchCity(value);
  };

  return (
    <>
      <SearchBar placeholder="Search for cities" onSearch={handleSearch} />
      <WeatherApp city={searchCity} />
      <WeatherForecastSlider lat={40.4165} lon={-3.7026} />
      <Sidebar />
    </>
  );
}

export default App;
