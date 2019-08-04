import React from "react";
import { useSpring, animated, config } from "react-spring";

var AnimatedPart = () => {
  var props = useSpring({
    from: { marginTop: -500 },
    to: { marginTop: 0 },
    config: { duration: 2000 },
    delay: 1000
  });
  return (
    <animated.div style={props}>
      <div style={c2Style}>Check</div>
    </animated.div>
  );
};

class Component2 extends React.Component {
  render() {
    return <AnimatedPart />;
  }
}

const c2Style = {
  background: "red",
  color: "white",
  padding: "1.5rem"
};
export default Component2;
