var Movie = require('../models/movies');
var Count = require('../models/counts');

// Display the site homepage
exports.index = function(req, res) {
    res.sendfile('/public/pages/index.html', {'root': 'controllers/../'});
};

// Display list of all movies.
exports.movie_list = function(req, res) {
    Movie.find({}, function (err, result) {
        if (err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
};

// Display detail page for a specific movie based on id number.
exports.movie_detail = function(req, res) {
    //req.params.id
    Movie.find({_id:req.params.id}, function (err, result) {
        if (err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
};








