import React from "react";
import { CardContainer, CardItem, CardBody } from "./ThreeDCard";

const WeatherForcast = ({ time, temp, description, icon }) => {
  return (
    <div style={{ width: "25vh", height: "25vh" }}>
      <CardContainer>
        <CardBody className="weather-card card-body-small">
          <CardItem className="weather-container">
            <p style={{ fontSize: ".9rem" }}> {time || "time"}</p>
            <p style={{ fontSize: "1.5rem", color: "#00e676" }}>
              {temp || "temp"}°C
            </p>
            <p style={{ fontSize: "0.9rem" }}>{description || "description"}</p>
            <img
              src={icon}
              alt={description || "description"}
              style={{
                width: "50px",
                height: "50px",
                objectFit: "contain",
                marginTop: "8px",
              }}
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default WeatherForcast;
