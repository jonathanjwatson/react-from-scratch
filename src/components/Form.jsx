import React, { Component } from "react";

// This is a class component. We know this because it says "class"
class Form extends Component {
  // Class components can use state. We create an object.
  state = {
    banana: true,
    test: "",
    checkboxes: {},
  };

  checkboxes = [
    {
      display: "Golden Retriever",
      value: "goldenRetriever",
    },
    {
      display: "Pug",
      value: "pug",
    },
    {
      display: "Chihuahua",
      value: "chihuahua",
    },
    {
      display: "Huskie",
      value: "huskie",
    },
    {
        display: "Pomeranian",
        value: "pomeranian"
    }
  ];

  // When we use a class component, we have access to lifecycle methods.
  componentDidMount() {
    // Use the react dev tools inspector, rather than console logging.
    // console.log(this.state.banana);
    // debugger;
    // Because we are in a class component, this, refers to the "object" or class itself.
    // setState is a method built in to all class components.
    // this.setState({
    //   banana: false,
    // });

    const arrayOfObjects = this.checkboxes.map((checkbox) => checkbox.value);
    console.log(arrayOfObjects);
    let newObject = {};
    for (let i = 0; i < arrayOfObjects.length; i++) {
      newObject[arrayOfObjects[i]] = false;
    }
    console.log(newObject);
    this.setState({
      checkboxes: newObject,
    });
  }

  handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const newState = { ...this.state };
    newState.checkboxes[[name]] = checked;
    this.setState(newState);
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
          {this.checkboxes.map((checkbox, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={checkbox.value}
                name={checkbox.value}
                checked={this.state.checkboxes[[checkbox.value]]}
                onChange={this.handleCheckboxChange}
              />
              <label htmlFor={checkbox.value}>{checkbox.display}</label>
            </div>
          ))}
          {/* <div>
            <input
              type="checkbox"
              id={this.checkboxes[0].value}
              name={this.checkboxes[0].value}
              checked={this.state[this.checkboxes[0].value]}
              onChange={this.handleCheckboxChange}
            />
            <label htmlFor={this.checkboxes[0].value}>
              {this.checkboxes[0].display}
            </label>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Form;
