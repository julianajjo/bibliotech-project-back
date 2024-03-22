// const booksData = [
//   {
//     "title": "Um defeito de cor",
//     "author": " Ana Maria Gonçalves ",
//     "publisher": "Record",
//     "edition": "28",
//     "publication_year": 2006,
//     "number_of_pages": 952,
//     "language": "Português",
//     "format": "Livro",
//     "availability": "Sim",
//     "image_link": "src/images/bibliotech-book.png",
//     "link": "https://a.co/d/eGNS6j0"
//   },
//   {
//     "title": "Um defeito de cor",
//     "author": " Ana Maria Gonçalves ",
//     "publisher": "Record",
//     "edition": "28",
//     "publication_year": 2006,
//     "number_of_pages": 952,
//     "language": "Português",
//     "format": "Livro",
//     "availability": "Sim",
//     "image_link": "src/images/bibliotech-book.png",
//     "link": "https://a.co/d/eGNS6j0"
//   },
//   {
//     "title": "Um defeito de cor",
//     "author": " Ana Maria Gonçalves ",
//     "publisher": "Record",
//     "edition": "28",
//     "publication_year": 2006,
//     "number_of_pages": 952,
//     "language": "Português",
//     "format": "Livro",
//     "availability": "Sim",
//     "image_link": "src/images/bibliotech-book.png",
//     "link": "https://a.co/d/eGNS6j0"
//   },
//   {
//     "title": "Um defeito de cor",
//     "author": " Ana Maria Gonçalves ",
//     "publisher": "Record",
//     "edition": "28",
//     "publication_year": 2006,
//     "number_of_pages": 952,
//     "language": "Português",
//     "format": "Livro",
//     "availability": "Sim",
//     "image_link": "src/images/bibliotech-book.png",
//     "link": "https://a.co/d/eGNS6j0"
//   },
// ];
const mongoose = require('mongoose')
const Book = require("./model")

const getAll = async function(request, response) {
  const books = await Book.find()
  response.json(books)
}

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
  })

  const bookCreated = await newBook.save()
  response.json({bookCreated})
}

module.exports = {
  getAll,
  create
}