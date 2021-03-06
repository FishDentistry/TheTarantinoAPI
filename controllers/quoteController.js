var Quote = require('../models/quotes');
var Count = require('../models/counts');
var ObjectId = require('mongoose').Types.ObjectId;
var countID = new ObjectId('62081f0a895dd734097387fb');

// Display list of all quotes.
exports.quote_list = function(req, res) {
    Count.findOneAndUpdate({_id :countID}, {$inc : {'request_count' : 1}}).exec();
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
    Count.findOneAndUpdate({_id :countID}, {$inc : {'request_count' : 1}}).exec();
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

