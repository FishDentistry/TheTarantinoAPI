var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CharacterSchema = new Schema(
  {
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    movies_in: [{type: Schema.Types.ObjectId, ref: 'Movie'}],
    played_by: {type: String, required: true}
  }
);

// Virtual for book's URL
CharacterSchema
.virtual('url')
.get(function () {
  return '/characters/' + this._id;
});

//Export model
module.exports = mongoose.model('Character', CharacterSchema);
