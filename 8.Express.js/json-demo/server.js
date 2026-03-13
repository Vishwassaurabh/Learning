const express = require("express");

//! Initializes express app
const app = express();

app.use(express.json());

//sending JSON Data as response
app.post("/", (req, res) => {
  res.json({
    message: "welcome to Express",
    name: "Jamesh",
    author: "vishwas",
  });
});

//making post request
//clients: postman/browers/mobile/thunder clients
//req.body -contains data a user is sending into our server for processing

//pass incoming data from a user/client
app.use(express.json());
app.post("/books", (req, res) => {
  res.json({ message: "Book added successfully", data: req.body });
});

//!start the server
app.listen(3000, () => {
  console.log(`server is up to running`);
});
