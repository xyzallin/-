// ThreeDCard.js
import React from "react";
import "./ThreeDCard.css"; // Add styles for card effect

export const CardContainer = ({ children, className }) => (
  <div className={`card-container ${className || ""}`}>{children}</div>
);

export const CardBody = ({ children, className }) => (
  <div className={`card-body ${className || ""}`}>{children}</div>
);

export const CardItem = ({
  children,
  className,
  translateZ,
  as = "div",
  ...props
}) => {
  const Component = as;
  return (
    <Component
      className={`card-item ${className || ""}`}
      style={{
        transform: `translateZ(${translateZ || 0}px)`,
        textAlign: "center", // Center text inside card
        color: "#00e676", // Set static text color
        fontSize: "18px", // Adjust font size
        marginBottom: "10px", // Space between items
        ...props.style, // Allow inline styles for individual overrides
      }}
      {...props}
    >
      {children}
    </Component>
  );
};
