
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  first_name: {type:String},
  email: {type:String},
  topic :{type:String},
  content : {type: String},
  comments : []
});
var userObj = mongoose.model('UserDetails', userSchema);

module.exports = userObj;