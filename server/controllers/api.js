const Genre = require('../models/Genre')
const Book = require('../models/Book')

module.exports = {
    genresGet: (req, res) => {
        Genre.find().then(genres => {
            res.status(200).json(genres);
          })
    },
    booksGet: (req, res) => {
        Book.find().then(books => {
            res.status(200).json(books)
        })
    },
    getBookById: (req, res) => {
        const id = req.params.id

        Book.findById(id)
            .then(book => {
                if (book != null) {
                    res.status(200).json(book)
                } else {
                    res.status(404).send("Not Found!");
                }
            });
    },

    getGenreById: (req, res) => {
        const id = req.params.id

        Genre.findById(id)
            .then(genre => {
                if (genre != null) {
                    res.status(200).json(genre)
                } else {
                    res.status(404).send("Not Found!");
                }
            });
    },

    getGenresByName: (req, res) => {
        const { search } = req.body;
        const query = search ? { name: search } : {};

        Genre.find(query)
            .then(genre => {
                return res.json(genre);
            });
    },

    getBooksByName: (req, res) => {
        const { search } = req.body;
        const query = search ? { name: search } : {};

        Book.find(query)
            .then(book => {
                return res.json(book);
            });
    }

}