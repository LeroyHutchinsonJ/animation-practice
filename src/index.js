import React from "react";
import ReactDOM from "react-dom";
import Component from "./component";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Component />
    </div>
  );
}

//So you can use objects to implement styles in components, interesting
const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem"
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
