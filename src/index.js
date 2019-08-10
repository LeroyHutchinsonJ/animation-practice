import React from "react";
import ReactDOM from "react-dom";
import Component1 from "./component1";
import Component2 from "./component2";
import Component3 from "./component3";
import { Spring, Transition, animated } from "react-spring/renderprops";

import "./styles.css";

class App extends React.Component {
  state = {
    showComponent3: false
  };

  toggleFunction = () => {
    console.log(this.state.showComponent3);
    this.setState({ showComponent3: !this.state.showComponent3 });
  };
  render() {
    return (
      <div className="App">
        <Component1 />
        <Component2 toggle={() => this.toggleFunction()} />
        <Transition
          native
          items={this.state.showComponent3}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show => show && (props => (
              <animated.div style={props}>
                <Component3 />
              </animated.div>
            ))}
        </Transition>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
