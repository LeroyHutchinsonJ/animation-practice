import React from "react";
import { useSpring, animated } from "react-spring";
import { Spring } from "react-spring/renderprops";

var AnimatedPart = words => {
  var props = useSpring({
    from: { marginTop: -500 },
    to: { marginTop: 0 },
    config: { duration: 1000 },
    delay: 500
  });
  return (
    <animated.div style={props}>
      <div style={c1Style}>{words.children}</div>
    </animated.div>
  );
};

class Component1 extends React.Component {
  render() {
    return (
      <AnimatedPart>
        <h1>Component 1</h1>
        <h2>Lets see some animation!</h2>
        <Spring
          from={{ number: 1 }}
          to={{ number: 10 }}
          config={{ delay: 3500, duration: 10000 }}
        >
          {props => <div style={numberStyle}>{props.number.toFixed()}</div>}
        </Spring>
      </AnimatedPart>
    );
  }
}

//So you can use objects to implement styles in components, interesting
const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem",
  border: "none"
};
const numberStyle = {
  background: "#333",
  color: "white",
  padding: "1.5rem",
  borderRadius: "100%",
  width: "30px",
  textAlign: "center",
  margin: "auto"
};

export default Component1;
