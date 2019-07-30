import React from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import Component from "./component";

import "./styles.css";

function App() {
  const props = useSpring({ color: "green", from: { color: "blue" } });

  return (
    <animated.div className="App" style={props}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happesn!</h2>
    </animated.div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
