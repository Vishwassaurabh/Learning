import React from "react";

const Greeting = ({ name, message, age }) => {
  return (
    <h2>
      Hello, {name} {message}, your age is {age}
    </h2>
  );
};

export default Greeting;
