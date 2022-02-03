var Quote = require('../models/quotes');

// Display list of all quotes.
exports.quote_list = function(req, res) {
    Quote.find({}, function (err, result) {
        if (err){
            res.json(err);
        }
        else{
            res.json(result.populate("said_by","first_name"));
        }
    });
};

// Display detail page for a specific quote based on id number.
exports.quote_detail = function(req, res) {
    //req.params.id
    Quote.find({_id:req.params.id}, function (err, result) {
        if (err){
            res.json(err);
        }
        else{
            res.json(result.populate("said_by","first_name"));
        }
    });
};