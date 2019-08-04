import React from "react";
import { useSpring, animated } from "react-spring";
import { Spring } from "react-spring/renderprops";

var AnimatedPart = words => {
  var props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1500 },
    delay: 1000
  });
  return (
    <animated.div style={props}>
      <div style={c2Style}>{words.children}</div>
    </animated.div>
  );
};

class Component2 extends React.Component {
  render() {
    return (
      <AnimatedPart>
        <h1>Component 2</h1>
      </AnimatedPart>
    );
  }
}

const c2Style = {
  background: "red",
  color: "white",
  padding: "1.5rem"
};

export default Component2;
