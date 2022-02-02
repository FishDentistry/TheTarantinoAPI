var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var QuoteSchema = new Schema(
  {
    quote_content: {type: String, required: true,maxLength: 100},
    said_by: {type: Schema.Types.ObjectId, ref: 'Character'}
  }
);

// Virtual for book's URL
QuoteSchema
.virtual('url')
.get(function () {
  return '/quotes/' + this._id;
});

//Export model
module.exports = mongoose.model('Quote', QuoteSchema);