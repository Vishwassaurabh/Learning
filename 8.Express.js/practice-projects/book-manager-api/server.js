const express = require("express");

//! initializes express app
const app = express();
const PORT = 3000;

//middleware to parse
app.use(express.json());

//simulated book data (static object for now)
let books = [
  { id: 1, title: "nodejs masterclass", author: "smith" },
  { id: 2, title: "mastering MERN Stack ", author: "Rakesh" },
];

//! get all books
app.get("/books", (req, res) => {
  res.json(books);
});

//!add new book
app.post("/books", (req, res) => {
  const newbook = req.body;

  newbook.id = books.length + 1;

  //push new book into the existing book
  books.push(newbook);
  res.json({ message: "Book added ", newbook: newbook, allbooks: books });
});

//! get a book by ID
app.get("/books/:id", (req, res) => {
  //get the id from the param
  const bookid = Number(req.params.id); //convert string to number

  const bookfound = books.find((book) => {
    return book.id === bookid;
  });

  if (!bookfound) {
    return res.json({ message: "book not found" });
  }
  res.json(bookfound);
});

//! Delete a book by id
app.delete("/books/:id", (req, res) => {
  const bookid = Number(req.params.id);

  books = books.filter((book) => {
    return book.id !== bookid;
  });

  res.json({ message: "book deleted successfully", books });
});

//! update book by id
app.put("/books/:id", (req, res) => {
  const bookid = Number(req.params.id);

  const index = books.findIndex((book) => {
    return book.id === bookid;
  });

  if (index === -1) {
    return res.json({ message: "book not found" });
  }

  const updatedbook = { ...books[index], ...req.body };

  books[index] = updatedbook;

  res.json({ message: "book updated", data: updatedbook });
});

//!start the server
app.listen(PORT, () => {
  console.log("server up to running");
});
