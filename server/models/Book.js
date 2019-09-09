const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchemaOptions = { timestamps: true };

const bookSchema = new Schema({
    name: {type: Schema.Types.String, required: true},
    author: { type: Schema.Types.String, required: true },
    genre: { type: Schema.Types.ObjectId, ref: 'Genre', populate: true},
}, bookSchemaOptions)

const Genre = require('../models/Genre')

const populateGenre = function(next) {
  this.populate('genre');

  next();
}

bookSchema.pre('find', populateGenre);
bookSchema.pre('findOne', populateGenre);

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
module.exports.seedBooks = () => {
    Book.find({}).then(books => {
      console.log("Creating books!");

      if (books.length > 0) return
  
      Genre.findOne({ name: 'Test' })
        .then((foundGenre) => {
          console.log(foundGenre);

          Book.create({
            name: "Test Book",
            author: "Test author",
            genre: foundGenre
          })
    
          Book.create({
            name: "Test Book 2",
            author: "Test author 2",
            genre: foundGenre
          })
    
          Book.create({
            name: "Test Book 3",
            author: "Test author 3",
            genre: foundGenre
          })
        })
    }) 
}