import React, { useEffect } from "react";
import { useState } from "react";
import Product from "./components/Product";

const App = () => {
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   //side effect code will be here
  //   console.log("This runs after render");
  // }, [count]);
  return (
    <div>
      {/* <h1>Counter:{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button> */}
      <Product/>
    </div>
  );
};

export default App;
