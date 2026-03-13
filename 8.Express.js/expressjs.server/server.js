const express = require("express");

//Initialize express
const app = express();

//basic route
app.get("/", (req, res) => {
  res.send("Hello from Express");
});

//about route
app.get("/about", (req, res) => {
  res.send("hello about page");
});

//GET-get data
//POST-send data
//PUT/PATCH -update data
//Delete-delete data

//contact us
app.get("/contact", (req, res) => {
  res.send("contact us page");
});

//signup route
app.post("/register", (req, res) => {
  res.send("Register routes");
});

app.get("/register", (req, res) => {
  res.send("Register routes");
});

//start the server
app.listen(3000, () => {
  console.log("server is runing on http://localhost:3000");
});
