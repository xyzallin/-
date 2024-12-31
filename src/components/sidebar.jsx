import React from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import LayersIcon from "@mui/icons-material/Layers";
import MapIcon from "@mui/icons-material/Map";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import "./sidebar.css";
import logo from "../logo.png";

function Sidebar() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div
      className="body"
      style={{
        width: "65px",
        height: "75vh",
        backgroundColor: "#1c1e26",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px 0",
        position: "fixed",
        left: "10px",
        top: "12vh",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)",
        borderRadius: "13px",
      }}
    >
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          margin: 0,
          width: "100%",
        }}
      >
        <li
          style={{
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
            height: "10vh",
          }}
          onClick={() => navigate("/")} // Navigate to HomePage
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
            height: "10vh",
          }}
          onClick={() => navigate("/weather")} // Navigate to WeatherApp
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
            height: "10vh",
          }}
        >
          <SettingsRoundedIcon style={{ fontSize: "24px", color: "#fff" }} />
          <span style={{ fontSize: "12px", marginTop: "5px" }}>Settings</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
