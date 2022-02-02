var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MovieSchema = new Schema(
  {
    movie_title: {type: String, required: true, maxLength: 100},
    release_year: {type: Number, required: true},
    runtime_length: {type: Number, required: true}
  }
);

// Virtual for a movie's URL
MovieSchema
.virtual('url')
.get(function () {
  return '/movies/' + this._id;
});

//Export model
module.exports = mongoose.model('Movie', MovieSchema);
