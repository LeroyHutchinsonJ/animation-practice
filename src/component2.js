import React from "react";
import { useSpring, animated } from "react-spring";

export default function Component2() {
  var props = useSpring({
    to: { marginTop: 0 },
    from: { marginTop: -500 }
  });
  return (
    <animated.div style={props}>
      <div style={c2Style}>Check</div>
    </animated.div>
  );
}

const c2Style = {
  background: "red",
  color: "white",
  padding: "1.5rem"
};
