var Character = require('../models/characters');

// Display list of all characters.
exports.character_list = function(req, res) {
    Character
    .find({})
    .populate('movies_in','movie_title')
    .exec(function(err, result) {                  
        if (err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
};

// Display detail page for a specific character based on id number.
exports.character_detail = function(req, res) {
    //req.params.id
    Character
    .find({_id:req.params.id})
    .populate('movies_in','movie_title')
    .exec(function(err, result) {                  
        if (err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
};