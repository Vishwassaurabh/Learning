const express = require("express");

//! Initializes express
const app = express();

//---Route chaining----
//! route for /books
app
  .route("/books")
  .get((req, res) => {
    res.send("Get all books");
  })
  .post((req, res) => {
    res.send("post a new books");
  })
  .delete((req, res) => {
    res.send("Delete all books");
  });


//!Route for /books/:id
app
  .route("/books/:id")
  .get((req, res) => {
    res.send(`get a single books -${req.params.id}`);
  })
  .put((req, res) => {
    res.send("Delete: delete a books");
  })
  .delete((req, res) => {
    res.send("Delete: delete a books");
  });

//! start the server
app.listen(3000, () => {
  console.log("server is up and runing ");
});
