import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  function handleSubmit(e) {
   //stop the page form refreshing
   e.preventDefault();
   console.log(e);
   
  }
  return (
    <div>
      <h1>Form Demo</h1>
      <h2>You typed : {name}</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          name="Name"
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
