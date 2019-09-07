const Genre = require('../models/Genre')

module.exports = {
    homeGet: (req, res) => {
      

        Genre.find({}).then(genres => {
            res.json(genres);

          })


    }
}