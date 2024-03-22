const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
  edition: {
    type: Number,
    required: true
  },
  publication_year: {
    type: Number,
    required: true
  },
  number_of_pages: {
    type: Number,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  format: {
    type: String,
    required: true
  },
  availability: {
    type: String,
    required: true
  },
  image_link: {
    type: String,
    required: false
  },
  link: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date
  }
});

module.exports = mongoose.model("book", BookSchema)