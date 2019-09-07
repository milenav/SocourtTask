const Genre = require('../models/Genre')

module.exports = {
    homeGet: (req, res) => {
        //res.render('./index')

        Genre.find({}).then(genres => {
            res.json(genres);

          })


    }
}