import React, { useState } from "react";

const App = () => {
  //! step 1: state setup
  const [isDark, setIsDark] = useState(true);

  // ! step 2: handle toggle in
  const ToggleTheme = () => {
    setIsDark(!isDark);
  };
  
  //! step 3: define styles
  const lightStyle = {
    backgroundColor: "#f9f9f9",
    color: "#333",
    padding: "50px",
    textAlign: "center",
    minHeight: "100vh",
  };
  const darkStyle = {
    backgroundColor: "#1a1a1a",
    color: "#f9f9f9",
    padding: "50px",
    textAlign: "center",
    minHeight: "100vh",
  };
  
  return (
    <div style={isDark ? darkStyle : lightStyle}>
      <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>
      <p>This Is Basic Theme Switcher Using useState</p>
      <button onClick={() => ToggleTheme()}>
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default App;
