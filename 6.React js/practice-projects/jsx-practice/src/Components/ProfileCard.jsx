import React from "react";

const ProfileCard = () => {
  const name = "Agnes";
  const language = "Javascripts";
  const bio = "I Love building web apps with react and exploring new tech.";
  const iamgeURl =
    "https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_1280.jpg";

  const hobbies = ["Coding", "Gaming", "Reading", "Playing Guitar"];

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
    
      <h1>Welcome to {name} 's Profile</h1>

      <img
        style={{
          width: "200px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "1rem",
          height: "200px",
        }}
        src={iamgeURl}
        alt="profile"
      />

      <p>
        <strong>Favorite Language : {language}</strong>
      </p>

      <p>Bio : {bio}</p>

      <h3>Hobbies</h3>
      <ul>
        {hobbies.map((hobby, index) => {
          return <li key={index}>{hobby}</li>;
        })}
      </ul>

    </div>
  );
};

export default ProfileCard;
