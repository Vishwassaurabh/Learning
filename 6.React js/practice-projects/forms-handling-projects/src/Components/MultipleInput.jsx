import React, { useState } from "react";

const MultipleInput = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    accepted: false,
    favorite: "",
    comment: "",
  });

  //! general change handler
  const handleChange = (e) => {
    //get the name,type ,value and checked from the input type
    const { name, type, value, checked } = e.target;
    //update the state
    setFormdata((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  //!handlesubmit
  const handleSubmit = (e) => {
    //prevent  page reloading
    e.preventDefault();
    console.log(formdata);
  };
  return (
    <form onSubmit={handleSubmit}>

      <h2>React form with Multiple Input types</h2>
      
      <div>
        <label>
          Name:
          <input
            name="name"
            value={formdata.name}
            onChange={handleChange}
            type="text"
          />
        </label>
      </div>

      <br />

      <div>
        <label>
          Email:
          <input
            name="email"
            value={formdata.email}
            onChange={handleChange}
            type="email"
          />
        </label>
      </div>

      <br />

      <div>
        <label>
          Password:
          <input
            name="password"
            value={formdata.password}
            onChange={handleChange}
            type="password"
          />
        </label>
      </div>

      <br />

      <div>
        <label>
          Age:
          <input
            name="age"
            value={formdata.age}
            onChange={handleChange}
            type="number"
          />
        </label>
      </div>

      <br />

      <div>
        <label>
          Gender:
          <input
            name="gender"
            value="male"
            onChange={handleChange}
            type="radio"
            checked={formdata.gender === "male"}
          />
          Male
        </label>
      </div>

      <br />

      <div>
        <label>
          <input
            name="gender"
            value="female"
            onChange={handleChange}
            type="radio"
            checked={formdata.gender === "female"}
          />
          Female
        </label>
      </div>

      <br />

      <div>
        <input
          name="accepted"
          value={formdata.accepted}
          type="checkbox"
          onChange={handleChange}
          required
        />
        I accept the terms amd condition
      </div>

      <br />

      <div>
        <label>
          Favorite Fruit :
          <select
            name="favorite"
            value={formdata.favorite}
            onChange={handleChange}
          >
            <option value="">----choose----</option>
            <option value="apple">Apple</option>
            <option value="mango">Mango</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
            <option value="grape">Grape</option>
          </select>
        </label>
      </div>

      <br />

      <div>
        <label>
          Comment:
          <textarea
            name="comment"
            value={formdata.comment}
            onChange={handleChange}
            rows="4"
          />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MultipleInput;
