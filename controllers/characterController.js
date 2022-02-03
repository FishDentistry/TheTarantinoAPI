var Character = require('../models/characters');

// Display list of all characters.
exports.character_list = function(req, res) {
    Character.find({}, function (err, result) {
        if (err){
            res.json(err);
        }
        else{
            res.json(result.populate("movies_in","movie_name"));
        }
    });
};

// Display detail page for a specific character based on id number.
exports.character_detail = function(req, res) {
    //req.params.id
    Character.find({_id:req.params.id}, function (err, result) {
        if (err){
            res.json(err);
        }
        else{
            res.json(result.populate("movies_in","movie_name"));
        }
    });
};