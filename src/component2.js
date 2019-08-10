import React from "react";
import { useSpring, animated } from "react-spring";
import Component3 from "./component3";

var AnimatedPart = words => {
  var props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
    delay: 13500
  });
  return (
    <animated.div style={props}>
      <div style={c2Style}>{words.children}</div>
    </animated.div>
  );
};
//When the button is clicked

//A function happens that tells the program to make component 3 visible

//So i do this by setting a visibility prop in component 3

//Set the opacity equal to the visibility prop, which is defaulted to 0

//Create a function here in the class component 2

//Create a visibility variable here and set it to 0
// When the function is called the visibility variable is set to 1
class Component2 extends React.Component {
  state = {
    visibility: 0,
    setVisibility: 0
  };

  component3Appear() {
    var checker = this.state.setVisibility % 2 === 0 ? 1 : 0;

    this.setState({ setVisibility: this.state.setVisibility + 1 });
    this.setState({ visibility: checker });
  }
  render() {
    var { visibility } = this.state;
    return (
      <>
        <AnimatedPart>
          <h1>Component 2</h1>
          <button style={buttonStyle} onClick={() => this.component3Appear()}>
            <h2>Press Me To See Component 3</h2>
          </button>
        </AnimatedPart>
        <Component3 visibility={visibility} />
      </>
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
