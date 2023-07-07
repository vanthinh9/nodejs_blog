class SiteController {
    // [GET] / news
    index(req, res) {
        res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.send('SEARCH DETAIL !!!');
    }
}

module.exports = new SiteController();

const newController = require('./NewsController');
