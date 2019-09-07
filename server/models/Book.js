const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: { type: Schema.Types.String },
    author: { type: Schema.Types.String },
    genres: { type: Schema.Types.ObjectId, ref: 'Genre'},
    dateCreated: { type: Schema.Types.Date, default: Date.now },
    dateUpdated: { type: Schema.Types.Date, default: Date.now }
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
module.exports.seedBooks = () => {
    Book.find({}).then(books => {
      if (books.length > 0) return

  
      Book.create({
        name: "Test Book",
        author: "Test author"
      })
    })
}