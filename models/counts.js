var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CountSchema = new Schema(
  {
    request_count: {type:Number,required: true}
  }
);

//Export model
module.exports = mongoose.model('Count', CountSchema);