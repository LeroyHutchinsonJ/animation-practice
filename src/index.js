import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";

import Component1 from "./component1";
import Component2 from "./component2";
import Component3 from "./component3";

import { useTransition, animated, Transition } from "react-spring";

import "./styles.css";

var AnimateComponent3 = show => {
  var transitions = useTransition(show, item => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 }
  });

  return transitions.map(
    ({ item, key, props }) =>
      item.show && (
        <animated.div key={key} style={props}>
          <Component3 />
          {console.log(item)}
        </animated.div>
      )
  );
};

class App extends React.Component {
  state = {
    showComponent3: true
  };

  toggleFunction = () => {
    this.setState({ showComponent3: !this.state.showComponent3 });
  };
  render() {
    return (
      <div className="App">
        <Component1 />
        <Component2 toggle={() => this.toggleFunction()} />

        <AnimateComponent3 show={this.state.showComponent3} />
      </div>
    );
  }
}

/*

*/

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
