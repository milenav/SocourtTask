const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchemaOptions = { timestamps: true };

const bookSchema = new Schema({
    name: { type: Schema.Types.String },
    author: { type: Schema.Types.String },
    genre: { type: Schema.Types.ObjectId, ref: 'Genre'},
    // dateCreated: { type: Schema.Types.Date, default: Date.now },
    // dateUpdated: { type: Schema.Types.Date, default: Date.now }
}, bookSchemaOptions)

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
module.exports.seedBooks = () => {
    Book.find({}).then(books => {
      console.log("Creating books!");

      if (books.length > 0) return
  
      Book.create({
        name: "Test Book",
        author: "Test author"
      })

      Book.create({
        name: "Test Book 2",
        author: "Test author 2"
      })

      Book.create({
        name: "Test Book 3",
        author: "Test author 3"
      })

    }) 
}