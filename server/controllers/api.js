const Genre = require('../models/Genre')

module.exports = {
    genresGet: (req, res) => {
        //res.render('./index')

        Genre.find({}).then(genres => {
            res.json(genres);

          })


    }
}