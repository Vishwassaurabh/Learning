const express = require("express");

//! Express app
const app = express();
const PORT = 3000;

//middelware (Global)
app.use((req, res, next) => {
  console.log("middleware called");
  next();
});

//home Route
app.get("/", (req, res) => {
  res.send("Home page");
});

//About
app.get("/about", (req, res) => {
  res.send("About page");
});

//!start the server
app.listen(PORT, () => {
  console.log("server is up to running");
});
