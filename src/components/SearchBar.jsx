// // import React from "react";
// // import "./SearchBar.css"; // Import the CSS file
// // import moving_logo from "../moving_logo.png";

// // function SearchBar({ placeholder, onSearch }) {
// //   return (
// //     <>
// //       <div style={{ display: "block", width: "50vh" }}>
// //         <div>
// //           {" "}
// //           <img
// //             src={moving_logo}
// //             className="App-logo"
// //             style={{
// //               width: 55,
// //               height: 55,
// //               display: "block",
// //               flexDirection: "row",
// //             }}
// //             alt="logo"
// //           />
// //         </div>
// //         <div className="search-bar">
// //           <input
// //             type="text"
// //             className="search-input"
// //             placeholder={placeholder || "Search for cities"}
// //             onChange={(e) => onSearch && onSearch(e.target.value)}
// //           />
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default SearchBar;

// import React from "react";
// import "./SearchBar.css";
// import moving_logo from "../moving_logo.png";

// function SearchBar({ placeholder, onSearch }) {
//   return (
//     <>
//       {/* Logo Section */}
//       <div className="logo-container">
//         <img src={moving_logo} className="App-logo" alt="logo" />
//       </div>

//       {/* Search Bar Section */}
//       <div className="search-container">
//         <div className="search-bar">
//           <input
//             type="text"
//             className="search-input"
//             placeholder={placeholder || "Search for cities"}
//             onChange={(e) => {
//               // Call the onSearch function passed via props
//               if (onSearch) {
//                 onSearch(e.target.value);
//               }
//             }}
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// export default SearchBar;

import React, { useState } from "react";
import "./SearchBar.css";
import moving_logo from "../moving_logo.png";

function SearchBar({ placeholder, onSearch }) {
  const [inputValue, setInputValue] = useState(""); // Track the input value locally

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && onSearch) {
      // Trigger search only when Enter is pressed

      onSearch(inputValue);
      setInputValue("");
    }
  };

  return (
    <>
      {/* Logo Section */}
      <div className="logo-container">
        <img src={moving_logo} className="App-logo" alt="logo" />
      </div>

      {/* Search Bar Section */}
      <div className="search-container">
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder={placeholder || "Search for cities"}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // Update local state
            onKeyPress={handleKeyPress} // Trigger search on Enter
          />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
