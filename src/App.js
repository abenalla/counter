import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  // this is where out methods will be defined
  increment = () => {
    this.setState ({
      count: this.state.count +1
    })
    // this is where your code goes.
  }

  decrement = () => {
    this.setState ({
      count: this.state.count -1
    })
    // this is where your code goes.
  }
  render() {

    return(
    <div className = "container">
      <div className = "navbar">Counter.js</div>
      <div className = "counter">
    <h1>{this.state.count}</h1>
        <button type ="button" onClick={this.increment}>Increment</button>
        <button type ="button" onClick={this.decrement}>Decrement</button>
      </div>
    </div>
    );
  }
}

export default Counter;
