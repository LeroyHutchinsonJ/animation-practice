import React from "react";
import ReactDOM from "react-dom";
import Component1 from "./component1";
import Component2 from "./component2";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Component1 />
      <Component2 />
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
