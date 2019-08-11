import React from "react";
import { useSpring, animated } from "react-spring";

var AnimatedPart = words => {
  var props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
    delay: 0 //13500
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
        <button style={buttonStyle} onClick={this.props.toggle}>
          <h2>Toggle Component 3</h2>
        </button>
      </AnimatedPart>
    );
  }
}

const c2Style = {
  background: "red",
  color: "white",
  padding: "1.5rem"
};
const buttonStyle = {
  color: "white",
  border: "none",
  background: "#333",
  padding: "20px"
};

export default Component2;
