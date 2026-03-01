import React, { useState } from "react";

const ToggleText = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <p>This is visible text!</p>}
    </div>
  );
};

export default ToggleText;
