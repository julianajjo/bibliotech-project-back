const express = require("express");
const router = express.Router();
const { getAll, create, update, deleteBook } = require("./controller");

router.get("/books", getAll );
router.post("/books", create );
router.put("/books/:id", update );
router.delete('/books/:id', deleteBook);

module.exports = router