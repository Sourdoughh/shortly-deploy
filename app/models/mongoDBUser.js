var mongoose = require('mongoose');
var crypto = require('crypto');
var Promise = require('bluebird');
var bcrypt = require('bcyrpt-nodejs');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {type: String, index: {unique: true}},
  password: String
});

var User = mongoose.model('User', userSchema);

// have to hash the password before you store it
userSchema.pre('save', function(next, done){
  var cipher = Promise.promisify(bcrypt.hash);
  return cipher(this.password, null, null).bind(this)
    .then(function(hash){
      this.password = hash;
      next();
    });
});

// make comparePassword a method for the model
userSchema.prototype.comparePassword = function(attemptedPassword, callback){
  bcrypt.compare(attemptedPassword, this.password, function(err, isMatch){
    callback(isMatch);
  });
};

});

module.exports = User;
