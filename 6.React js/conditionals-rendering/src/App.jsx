import React from "react";
import Users from "./Users";

const App = () => {
  const names = ["john", "Linda", "Zara"];
  return (
    <div style={{padding:"20px",background:"#f0f0f0",margin:"auto",borderRadius:"6px"}}>
      <h2>List of Users</h2>
      <ul>
        {names.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
      <Users />
    </div>
  );
};

export default App;
