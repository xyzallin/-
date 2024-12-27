// import React from "react";
// import HomeIcon from "@mui/icons-material/Home";
// import WbCloudyIcon from "@mui/icons-material/WbCloudy";
// import LayersIcon from "@mui/icons-material/Layers";
// import MapIcon from "@mui/icons-material/Map";
// import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

// function Sidebar() {
//   return (
//     <div style={{ textAlign: "left" }}>
//       <ul
//         style={{
//           listStyleType: "none",
//           alignItems: "center",
//           padding: 0,
//           margin: 0,
//         }}
//       >
//         <li
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             margin: "10px 0",
//           }}
//         >
//           <HomeIcon style={{ fontSize: 30, color: "#000000" }} />
//           <span style={{ fontSize: "12px" }}>Home</span>
//         </li>
//         <li
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             margin: "10px 0",
//           }}
//         >
//           <WbCloudyIcon style={{ fontSize: 30 }} />
//           <span style={{ fontSize: "12px" }}>Weather</span>
//         </li>
//         <li
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             margin: "10px 0",
//           }}
//         >
//           <LayersIcon style={{ fontSize: 32 }} />
//           <span style={{ fontSize: "12px" }}>Cities</span>
//         </li>
//         <li
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             margin: "10px 0",
//           }}
//         >
//           <MapIcon style={{ fontSize: 30 }} />
//           <span style={{ fontSize: "12px" }}>Map</span>
//         </li>
//         <li
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             margin: "10px 0",
//           }}
//         >
//           <SettingsRoundedIcon style={{ fontSize: 30 }} />
//           <span style={{ fontSize: "12px" }}>Settings</span>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;

import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import LayersIcon from "@mui/icons-material/Layers";
import MapIcon from "@mui/icons-material/Map";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import "./sidebar.css";
import logo from "../logo.png";

function Sidebar() {
  return (
    <>
      <div className="searchBar"></div>
      <div
        className="body"
        style={{
          width: "65px",
          height: "75vh",
          backgroundColor: "#1c1e26", // Dark background
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px 0",
          position: "fixed", // Fixes the div to the left side of the viewport
          left: "10px",
          top: "12vh",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)", // Adds subtle shadow
          borderRadius: "13px",
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            margin: 0,
            width: "100%", // Ensures the menu spans the full width of the sidebar
          }}
        >
          <li
            style={{
              top: "1.5px",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img src={logo} alt="logo" style={{ width: 55, height: 55 }} />
          </li>
          <li
            className="list"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "20px 0",
              color: "#fff",
              cursor: "pointer",
              transition: "color 0.3s",
              height: "10vh",
            }}
          >
            <HomeIcon style={{ fontSize: "24px", color: "#fff" }} />
            <span style={{ fontSize: "12px", marginTop: "5px" }}>Home</span>
          </li>
          <li
            className="list"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "20px 0",
              color: "#fff",
              cursor: "pointer",
              transition: "color 0.3s",
              height: "10vh",
            }}
          >
            <WbCloudyIcon style={{ fontSize: "24px", color: "#fff" }} />
            <span style={{ fontSize: "12px", marginTop: "5px" }}>Weather</span>
          </li>
          <li
            className="list"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "20px 0",
              color: "#fff",
              cursor: "pointer",
              transition: "color 0.3s",
              height: "10vh",
            }}
          >
            <LayersIcon style={{ fontSize: "24px", color: "#fff" }} />
            <span style={{ fontSize: "12px", marginTop: "5px" }}>Cities</span>
          </li>
          <li
            className="list"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "20px 0",
              color: "#fff",
              cursor: "pointer",
              transition: "color 0.3s",
              height: "10vh",
            }}
          >
            <MapIcon style={{ fontSize: "24px", color: "#fff" }} />
            <span style={{ fontSize: "12px", marginTop: "5px" }}>Map</span>
          </li>
          <li
            className="list"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "20px 0",
              color: "#fff",
              cursor: "pointer",
              transition: "color 0.3s",
              height: "10vh",
            }}
          >
            <SettingsRoundedIcon style={{ fontSize: "24px", color: "#fff" }} />
            <span style={{ fontSize: "12px", marginTop: "5px" }}>Settings</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
