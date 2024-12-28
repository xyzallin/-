import React from "react";
import { CardContainer, CardItem, CardBody } from "./ThreeDCard";
import { motion } from "framer-motion";

const WeatherForcast = () => {
  return (
    <>
      <div style={{ width: "10vh", top: "100px" }}>
        <CardContainer>
          <CardBody className="weather-card card-body-small">
            <div>
              <CardItem className="weather-container"></CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </>
  );
};

export default WeatherForcast;
