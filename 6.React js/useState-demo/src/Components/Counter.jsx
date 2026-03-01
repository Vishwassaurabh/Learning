import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>you clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>increase (+1)</button>
      <button onClick={() => setCount(count - 1)}>decrease (-1)</button>
    </>
  );
};

export default Counter;
