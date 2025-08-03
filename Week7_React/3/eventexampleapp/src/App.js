import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
    this.sayHello = this.sayHello.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
    this.sayHello(); // multiple methods
  }

  sayHello() {
    alert("Hello! Member1");
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  handleSyntheticEvent = (e) => {
    alert("I was clicked");
    console.log("Synthetic event object:", e); // React synthetic event
  };

  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <p>{this.state.count}</p>

        <button onClick={this.increment}>Increment</button>
        <br />
        <br />
        <button onClick={this.decrement}>Decrement</button>
        <br />
        <br />
        <button onClick={() => this.sayWelcome("Hello! Member1")}>Say welcome</button>
        <br />
        <br />
        <button onClick={this.handleSyntheticEvent}>Click on me</button>

        <br />
        <br />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
