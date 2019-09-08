const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchemaOptions = { timestamps: true };

const genreSchema = new Schema({
    name: { type: Schema.Types.String},
    //dateCreated: { type: Schema.Types.Date, default: Date.now },
    //dateUpdated: { type: Schema.Types.Date, default: Date.now }
}, bookSchemaOptions)

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;
module.exports.seedGenres = () => {
    Genre.find({}).then(genres => {
      if (genres.length > 0) return
      console.log("Creating genres!");
  
      Genre.create({
        name: "Test"
      })

      Genre.create({
        name: "Drama"
      })

      Genre.create({
        name: "Horror"
      })
    })
}