const express = require("express");
const Book = require("../models/bookModel");

const router = express.Router();

//Route for create a book details

router.post("/books", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "All fields are required",
      });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      message: error.message,
    });
  }
});

// Route for get all the books
router.get("/books", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(201).send({ count: books.length, data: books });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

// Route for get all the books
router.get("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

// Route for update a book
router.put("/books/:id", async (req, res) => {
  try {
    // if (!req.body.title || !req.body.author || !req.body.publishYear) {
    //   return res.status(400).send({
    //     message: "Enter all required fields",
    //   });
    // }

    const { id } = req.params;

    const updateBook = await Book.findByIdAndUpdate(id, req.body);
    if (!updateBook) {
      return res.status(404).send({ message: "Book Not Found" });
    }

    return res
      .status(200)
      .send({ message: "Book details updated Successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

//Route for delete a book
router.delete("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteBook = await Book.findByIdAndDelete(id);
    if (!deleteBook) {
      return res.status(404).send({ message: "Book Not Found" });
    }

    return res.status(200).send({ message: "Deleted Successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
