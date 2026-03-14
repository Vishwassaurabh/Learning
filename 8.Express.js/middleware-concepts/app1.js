const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

//! Express app
const app = express();
const PORT = 3000;

//=============
//1.Built-in Middleware
//=============
app.use(express.json()); //parse json
app.use(express.static("public"));

//=============
//2.Third-Party Middleware
//=============
app.use(morgan("dev"));  //Log http request
app.use(cors());        //Allow Cross-Origin Request

//=============
//3.custom Middleware
//=============
app.use((req, res, next) => {
  console.log(`Custom Logger: ${req.method}-${req.url}`);
  req.requestTime = new Date();
  next();
});

//=============
//4.Application-Level Middleware
//=============
app.get(
  "/admin",
  (req, res, next) => {
    console.log("checking admin access...");
    //you could authentication
    next();
  },
  (req, res) => {
    res.json({ message: "welcome to admin pannel" });
  },
);

//=============
//5.Router-Level Middleware
//=============
const userRouter = express.Router();
userRouter.use((req, res, next) => {
  console.log("user router middleware called");
  next();
});
userRouter.get("/profile", (req, res) => {
  res.json({ message: "user profile loaded" });
});


// Route
app.get("/about", (req, res) => {
  console.log(req.requestTime);

  res.json({ message: "welcome to about page" });
});

app.use("/", userRouter);

//!start the server
app.listen(PORT, () => {
  console.log("server is up to running");
});
