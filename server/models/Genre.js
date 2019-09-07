const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreSchema = new Schema({
    name: { type: Schema.Types.String},
    book: { type: Schema.Types.ObjectId, ref: 'Book' },
    dateCreated: { type: Schema.Types.Date, default: Date.now },
    dateUpdated: { type: Schema.Types.Date, default: Date.now }
})

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;
module.exports.seedGenres = () => {
    Genre.find({}).then(genres => {
      if (genres.length > 0) return
  
      Genre.create({
        name: "Test"
      })
    })
}