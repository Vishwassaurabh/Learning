const express = require("express");

//! Initializes express
const app = express();

//--Route here---
//! Home Route
app.get("/", (req, res) => {
  res.send("Welcome to my Mini Express Store");
});

//! product Route
app.get("/products", (req, res) => {
  res.send("Here are our amazing products");
});
//! About Route
app.get("/about", (req, res) => {
  res.send("About us: sell the cool stock");
});

//!  Contact Route
app.get("/contact", (req, res) => {
  res.send("contact us at vishwas@store.com");
});

//! Signup Route
app.post("/signup", (req, res) => {
  res.send("sign up page ");
});

//Route parameter
// app.get("/products/:productId", (req, res) => {
//   console.log(req.params.productId);
//   res.send(`You requested product with ID = ${req.params.productId}`);
// });

//!Query string
app.get("/products/search", (req, res) => {
  console.log(req.query);

  res.send("Query string demo");
});

//! start the server
app.listen(3000, () => {
  console.log("server is up and runing ");
});

//product/search?category=shoes&color=black
