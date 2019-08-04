import React, { Children } from "react";
import { useSpring, animated, config } from "react-spring";
import { Spring } from "react-spring/renderprops";

var AnimatedPart = words => {
  var props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
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
        <Spring
          from={{ number: 1 }}
          to={{ number: 10 }}
          config={{ delay: 1000, duration: 10000 }}
        >
          {props => <div style={numberStyle}>{props.number.toFixed()}</div>}
        </Spring>
      </AnimatedPart>
    );
  }
}

const c2Style = {
  background: "red",
  color: "white",
  padding: "1.5rem"
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
export default Component2;
