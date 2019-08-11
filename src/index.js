import React from "react";
import ReactDOM from "react-dom";
import Component1 from "./component1";
import Component2 from "./component2";
import Component3 from "./component3";
import { useTransition, animated } from "react-spring";

import "./styles.css";

var AnimateComponent3 = show => {
  var transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return transitions.map(({ item, key, props }) => (
    <animated.div key={key} style={props}>
      <Component3 />
      {console.log(item)}
    </animated.div>
  ));
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
        {this.state.showComponent3 && (
          <AnimateComponent3 show={this.state.showComponent3} />
        )}
      </div>
    );
  }
}

/*
<Transition
          native
          items={this.state.showComponent3}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {showComponent3 => showComponent3 && (props => (
              <animated.div style={props}>
                <Component3 />
               
              </animated.div>
            ))}
        </Transition>
*/

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
