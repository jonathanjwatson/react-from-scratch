import React, { Component } from "react";

class Calculator extends Component {
  state = {
    numberOne: "",
    numberTwo: "",
    operator: "add",
    result: "",
  };

  handleButtonClick = () => {
    console.log(this.state);
    const { numberOne, numberTwo, operator } = this.state;
    let result;
    switch (operator) {
      case "add":
        result = parseFloat(numberOne) + parseFloat(numberTwo);
        this.setState({ result });
        break;
      case "subtract":
        result = parseFloat(numberOne) - parseFloat(numberTwo);
        this.setState({ result });
        break;
      case "multiply":
        result = parseFloat(numberOne) * parseFloat(numberTwo);
        this.setState({ result });
        break;
      case "divide":
        result = parseFloat(numberOne) / parseFloat(numberTwo);
        this.setState({ result });
        break;
      default:
      // code block
    }
  };

  handleInputChange = (event) => {
    // const {name, value} = event.target;
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <div>This is my calculator.</div>

        {/* GIVEN: I am on the page
            WHEN: I see the form
            THEN: I should see an input for numberOne */}
        {/* GIVEN: I am on the page
            WHEN: I type something into the form input
            THEN: I should see state update */}
        <div>
          <input
            type="number"
            name="numberOne"
            value={this.state.numberOne}
            onChange={this.handleInputChange}
          />
        </div>

        <div>
          <input
            type="number"
            name="numberTwo"
            value={this.state.numberTwo}
            onChange={this.handleInputChange}
          />
        </div>

        <div>
          <select
            id="operator"
            name="operator"
            onChange={this.handleInputChange}
          >
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
          </select>
        </div>

        <div>
          <button onClick={this.handleButtonClick}>Submit</button>
        </div>

        <div>
          {this.state.result && <p>Your answer is: {`${this.state.result}`}</p>}
        </div>
      </div>
    );
  }
}

export default Calculator;
