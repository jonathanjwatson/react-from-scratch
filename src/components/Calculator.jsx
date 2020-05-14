import React, { Component } from "react";

class Calculator extends Component {
  state = {
    numberOne: "",
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
        <div>
          <input
            type="number"
            name="numberOne"
            value={this.state.numberOne}
            onChange={this.handleInputChange}
          />
        </div>

        <div>This will be numberTwo</div>

        <div>This will be the operator</div>

        <div>this will be the submit button</div>

        <div>This will be the result.</div>
      </div>
    );
  }
}

export default Calculator;
