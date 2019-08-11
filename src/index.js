import React from "react";
import ReactDOM from "react-dom";

import Component1 from "./component1";
import Component2 from "./component2";
import Component3 from "./component3";

import { useTransition, animated, Transition } from "react-spring";

import "./styles.css";

var AnimateComponent3 = show => {
  var transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    to: { opacity: 0 }
  });

  return transitions.map(
    ({ item, key, props }) =>
      item.show && (
        <animated.div key={key} style={props}>
          <Component3 />
          {console.log(item.show)}
        </animated.div>
      )
  );
};

class App extends React.Component {
  state = {
    showComponent3: false
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
