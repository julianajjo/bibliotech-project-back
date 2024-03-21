const express = require("express")
const router = express.Router()
const { getAll, create } = require("./controller") 

router.get("/books", getAll )

router.post("/books", create )

module.exports = router