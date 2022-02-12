var Movie = require('../models/movies');
var Count = require('../models/counts');
var ObjectId = require('mongoose').Types.ObjectId;
var countID = new ObjectId('62081f0a895dd734097387fb');


// Display the site homepage
exports.index = function(req, res) {
    res.sendfile('/public/pages/index.html', {'root': 'controllers/../'});
};

//Display total number of API calls
exports.total_calls = function(req,res){
    Count.find({_id:countID}, function (err, result) {
        if (err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
}

// Display list of all movies.
exports.movie_list = function(req, res) {
    Count.findOneAndUpdate({_id :countID}, {$inc : {'request_count' : 1}}).exec();
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
    Count.findOneAndUpdate({_id :countID}, {$inc : {'request_count' : 1}}).exec();
    Movie.find({_id:req.params.id}, function (err, result) {
        if (err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
};








