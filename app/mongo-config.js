var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = mongoose.createConnection('mongodb://MongoLab-t:1ftRscjX8MXXi1U9oG20HEk.fYKQ5RRi8qRWoalYI6w-@ds030607.mongolab.com:30607/MongoLab-t');

var UrlSchema = new Schema({
  url: String,
  base_url: String,
  code: Number,
  title: String,
  visits: Number,
  date: { type: Date, default: Date.now }
});

var UserSchema = new Schema({
  username: String,
  password: String,
  date: { type: Date, default: Date.now }
});

module.exports.Urls = mongoose.model('urls', UrlSchema);
module.exports.Users = mongoose.model('users', UserSchema);

db.on('error', console.error.bind(console, 'connection error:'));

module.exports.db = db;
