const mongoose = require('mongoose')
const Genre = require('../models/Genre')
const Book = require('../models/Book')

mongoose.Promise = global.Promise

module.exports = (settings) => {
  mongoose.connect(settings.db)
  let db = mongoose.connection

  db.once('open', err => {
    if (err) {
      throw err
    }
    console.log('MongoDB ready!')
    Genre.seedGenres();
    Book.seedBooks();
  })
  db.on('error', err => console.log(`Database error: ${err}`))
}