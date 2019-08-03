import React from "react";
import { useSpring, animated } from "react-spring";

export default function Component() {
  const props = useSpring({ color: "green", from: { color: "blue" } });

  return (
    <div className="App" style={c1Style}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happesn!</h2>
    </div>
  );
}

//So you can use objects to implement styles in components, interesting
const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem"
};
