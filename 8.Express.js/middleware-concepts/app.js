const express = require("express");

//! Express app
const app = express();
const PORT = 3000;

//middelware (Global)
app.use((req, res, next) => {
  const error = new Error("Oops! something went wrong");
  next(error); //without this , the route below won't run
});

//home Route
app.get("/", (req, res) => {
  res.send("Home page");
});

//About
app.get("/about", (req, res) => {
  res.send("About page");
});

//error-handling middleware
app.use((err, req, res, next) => {
  console.log("Error", err.message);
  res.send("Something broke!");
});

//!start the server
app.listen(PORT, () => {
  console.log("server is up to running");
});
