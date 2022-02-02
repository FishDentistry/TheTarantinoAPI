var express = require('express');
var router = express.Router();

// Require controller modules.
var movie_controller = require('../controllers/movieController');
var character_controller = require('../controllers/characterController');
var quote_controller = require('../controllers/quoteController');

// GET site home page.

router.get('/', movie_controller.index);


/// MOVIE ROUTES ///

// GET request for one movie by id.
router.get('/movies/:id', movie_controller.movie_detail);

// GET request for list of all movies.
router.get('/movies', movie_controller.movie_list);

// CHARACTER ROUTES //

// GET request for one character by id.
router.get('/characters/:id', character_controller.character_detail);

// GET request for list of all characters. 
router.get('/characters', character_controller.character_list);

// QUOTE ROUTES //

// GET request for one quote by id.
router.get('/quotes/:id', quote_controller.quote_detail);

// GET request for list of all quotes. 
router.get('/quotes', quote_controller.quote_list);

module.exports = router;