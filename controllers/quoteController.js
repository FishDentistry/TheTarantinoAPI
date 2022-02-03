var Quote = require('../models/quotes');

// Display list of all quotes.
exports.quote_list = function(req, res) {
    Quote
    .find({})
    .populate('said_by','first_name')
    .exec(function(err, result) {                  
        if (err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
};

// Display detail page for a specific quote based on id number.
exports.quote_detail = function(req, res) {
    //req.params.id
    Quote
    .find({_id:req.params.id})
    .populate('said_by','first_name')
    .exec(function(err, result) {                  
        if (err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
    
};

