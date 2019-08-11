import React from "react";

var Component3 = () => {
  const c3Style = {
    background: "green",
    color: "white",
    padding: "1.5rem",
    border: "none"
  };
  //Default opacity,set it inside the c3Style object
  return (
    <div style={c3Style}>
      <h1>Component 3</h1>
      <h2>Hello, Its a pleasure to meet you!</h2>
    </div>
  );
};

export default Component3;
