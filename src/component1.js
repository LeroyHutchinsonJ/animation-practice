import React from "react";
import { useSpring, animated } from "react-spring";

//First way to useSpring works only with functions
export default function Component1() {
  const props = useSpring({
    to: { marginTop: 0 },
    from: { marginTop: -500 }
  });

  return (
    <animated.div style={props}>
      <div style={c1Style}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happesn!</h2>
      </div>
    </animated.div>
  );
}

//So you can use objects to implement styles in components, interesting
const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem"
};
