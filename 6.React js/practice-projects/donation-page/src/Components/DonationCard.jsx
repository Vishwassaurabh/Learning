import React from "react";

const DonationCard = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "2rem",
      }}
    >
      <div
        style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}
      >
        <h3>Eductions</h3>
        <p>Support school program and supplies 📓 </p>
        <button
          style={{
            padding: "0.5rem",
            display: "block",
            justifyContent: "center",
            margin: "auto",
            background: "red",
            border: "none",
            color: "white",
            transition: "0.4s",
            cursor: "pointer",
          }}
        >
          Donate Now
        </button>
      </div>

      <div
        style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}
      >
        <h3>Health Cares</h3>
        <p>provide medicines and care for families 🏩</p>
        <button
          style={{
            padding: "0.5rem",
            display: "block",
            justifyContent: "center",
            margin: "auto",
            background: "red",
            border: "none",
            color: "white",
            transition: "0.4s",
            cursor: "pointer",
          }}
        >
          Donate Now
        </button>
      </div>

      <div
        style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}
      >
        <h3>AID</h3>
        <p>Deliver meal to those in need 🍵</p>
        <button
          style={{
            padding: "0.5rem",
            display: "block",
            justifyContent: "center",
            margin: "auto",
            background: "red",
            border: "none",
            color: "white",
            transition: "0.4s",
            cursor: "pointer",
          }}
        >
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default DonationCard;
