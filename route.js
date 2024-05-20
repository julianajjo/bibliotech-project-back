const express = require("express");
const router = express.Router();
const { getAll, create, update } = require("./controller");

router.get("/books", getAll );

router.post("/books", create );

router.put("/books/:id", update );

module.exports = router