import React from "react";
import { useNavigate } from "react-router-dom";
import BlobCursor from "./BlobCursor.jsx";
import SpotlightCard from "./SpotlightCard.jsx";
import Weathery from "../assets/Weathery.png";
import "../App.css";

function HomePageCard() {
  const navigate = useNavigate();

  return (
    <>
      <BlobCursor />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(182, 179, 170, 0.2)"
        >
          <h3 style={{ width: "75vh" }}>
            <img
              src={Weathery}
              alt="Weathery"
              style={{ width: 428, height: 110, marginLeft: "70px" }}
            />
          </h3>
          <button
            type="button"
            style={{ marginLeft: "175px", marginBottom: "10px" }}
            onClick={() => {
              navigate("/weather");
            }}
            className="btn" // Add a class for the button hover effect
          >
            <h5>weather</h5>
          </button>
        </SpotlightCard>
      </div>
    </>
  );
}

export default HomePageCard;
