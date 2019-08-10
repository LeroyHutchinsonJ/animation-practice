import React from "react";
import { useSpring, animated } from "react-spring";

var Component3 = ({ visibility = 0 }) => {
  const c3Style = {
    background: "green",
    color: "white",
    padding: "1.5rem",
    opacity: visibility
  };
  //Default opacity,set it inside the c3Style object
  return (
    <div style={c3Style}>
      <h1>Hello I am Component 3</h1>
      <h2>Its a pleasure to meet you! Visibility is </h2>
    </div>
  );
};

export default Component3;
