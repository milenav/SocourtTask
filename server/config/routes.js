const homeController = require('../controllers/home');
const apiController = require('../controllers/api');

module.exports = app => {
    app.get('/', homeController.homeGet);
    app.get('/api/genres', apiController.genresGet);
}