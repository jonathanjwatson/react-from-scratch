import React, { Component } from "react";

// This is a class component. We know this because it says "class"
class Form extends Component {
  // Class components can use state. We create an object.
  state = {
    banana: true,
    test: "",
  };

  // When we use a class component, we have access to lifecycle methods.
  componentDidMount() {
    // Use the react dev tools inspector, rather than console logging.
    // console.log(this.state.banana);
    // debugger;
    // Because we are in a class component, this, refers to the "object" or class itself.
    // setState is a method built in to all class components.
    this.setState({
      banana: false,
    });
  }

  handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    this.setState({
      [name]: checked,
    });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        This is my form.
        <div>
          <input
            type="text"
            name="test"
            value={this.state.test}
            onChange={this.handleInputChange}
          />
          <input
            type="checkbox"
            id="banana"
            name="banana"
            checked={this.state.banana}
            onChange={this.handleCheckboxChange}
          />
          <label for="scales">Scales</label>
        </div>
      </div>
    );
  }
}

export default Form;
