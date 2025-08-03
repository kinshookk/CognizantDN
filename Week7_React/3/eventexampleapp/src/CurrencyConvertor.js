import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      currency: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const inr = parseFloat(this.state.amount);
    const euroRate = 80; // Based on your screenshot (not real rate)
    const result = inr * euroRate;

    alert(`Converting to Euro Amount is ${result}`);
    this.setState({ currency: result });
  };

  render() {
    return (
      <div>
        <h2 style={{ color: "green" }}>Currency Convertor!!!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Amount: </label>
          <input
            type="text"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Currency: </label>
          <textarea
            name="currency"
            value={this.state.currency}
            readOnly
          ></textarea>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;
