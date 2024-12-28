import React from "react";
import { CardContainer, CardItem, CardBody } from "./ThreeDCard";

const WeatherForcast = ({ time, temp, description, icon }) => {
  return (
    <>
      <div style={{ width: "10vh", top: "100px" }}>
        <CardContainer>
          <CardBody className="weather-card card-body-small">
            <CardItem className="weather-container">
              <p>{time || "time"}</p>
              <p>{temp || "temp"}°C</p>
              <p>{description || "description"}</p>
              <img
                src={icon}
                alt={description || "description"}
                className="h-8 w-8 object-contain mx-auto"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </>
  );
};

export default WeatherForcast;
