const homeController = require('../controllers/home');
const apiController = require('../controllers/api');

module.exports = app => {
    app.get('/', homeController.homeGet);
    app.get('/api/genres', apiController.genresGet);
    app.get('/api/books', apiController.booksGet);
    app.get('/api/book/:id', apiController.getBookById);
    app.get('/api/genre/:id', apiController.getGenreById);
    app.post('/api/genres/search', apiController.getGenresByName); 
    app.post('/api/books/search', apiController.getBooksByName); 
}