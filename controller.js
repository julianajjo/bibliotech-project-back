const mongoose = require('mongoose');
const Book = require("./model");

const getAll = async function(request, response) {
  const books = await Book.find()
  response.json(books)
};

const create = async function(request, response) {
  const newBook = new Book({
    _id: new mongoose.Types.ObjectId(),
    title: request.body.title,
    author: request.body.author,
    publisher: request.body.publisher,
    edition: request.body.edition,
    publication_year: request.body.publication_year,
    number_of_pages: request.body.number_of_pages,
    language: request.body.language,
    format: request.body.format,
    availability: request.body.availability,
    image_link: request.body.image_link,
    link: request.body.link
  });

  const bookCreated = await newBook.save()
  response.json({bookCreated})
};

const update = async function(request, response) {
  const { id } = request.params;
  const updatedData = {
    title: request.body.title,
    author: request.body.author,
    publisher: request.body.publisher,
    edition: request.body.edition,
    publication_year: request.body.publication_year,
    number_of_pages: request.body.number_of_pages,
    language: request.body.language,
    format: request.body.format,
    availability: request.body.availability,
    image_link: request.body.image_link,
    link: request.body.link
  };

  try {
    const updatedBook = await Book.findByIdAndUpdate(id, updatedData, { new: true });
    if (updatedBook) {
      response.json({ updatedBook });
    } else {
      response.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  create,
  update
}