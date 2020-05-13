import React, { useEffect, useState } from "react";

// This is a functional component. We know this because it doesn't say class, and it begins with an arrow function.
const FormFunction = () => {
  // To use state, we must import the useState hook from "react"
  // Here is the example from React documentation.
  // const [count, setCount] = useState(0);
  const [banana, setBanana] = useState(true);

  // Because we do not have lifecycle methods, we must import the useEffect hook from "react"
  // to mirror componentDidMount, add an empty array to the dependencies
  useEffect(() => {
    // Use the react dev tools inspector, rather than console logging
    //   console.log(banana);
    // debugger;
    // Because we are in a functional component, we have used "useState" to define the setter method for "banana"
    setBanana(false);
  }, []);

  // You can't just write function methods on a functional component.
  // You have to define it as a constant.
  //   const handleCheckBoxChange = (event) => {
  //     // const { name, checked } = event.target;
  //     // Another difference is that we don't re-use state.
  //     // So we can just modify it directly.
  //     setBanana(event.target.checked);
  //   };

  return (
    <div>
      This is my Functional Form
      <div>
        <input
          type="checkbox"
          id="banana"
          name="banana"
          checked={banana}
          onChange={(e) => {
            setBanana(e.target.checked);
          }}
        />
        <label for="scales">Scales</label>
      </div>
    </div>
  );
};

export default FormFunction;
