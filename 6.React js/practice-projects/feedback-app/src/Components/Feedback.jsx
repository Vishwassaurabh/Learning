import React, { useState } from "react";

const Feedback = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submited, setSubmited] = useState(false);

  //! handle change
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  //!handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) {
      alert("please fill out both feilds");
      return;
    }
    //update the feedback to state
    setSubmited(true);
  };
  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2>Feedback project</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>
            Name: <input type="text" value={name} onChange={handleNameChange} />
          </label>
        </div>

        <br />

        <div>
          <label>
            Message:{" "}
            <textarea rows="4" value={message} onChange={handleMessageChange} />
          </label>
        </div>

        <button type="submit">Submit Feedback</button>

      </form>

      {/* show submitted if available */}
      
      {submited && (
        <div
          style={{
            marginTop: "30px",
            padding: "10px",
            background: "#f0f0f0",
            borderRadius: "6px",
          }}
        >
          <h3>Feedback Recevied:</h3>
          <p>Name:{name}</p>
          <p>Message:{message}</p>
        </div>
      )}
    </div>
  );
};

export default Feedback;
