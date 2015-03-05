var mongoose = require('mongoogse');
mongoose.connect('mongodb://localhost:27017/shortly');
var Schema = mongoose.Schema;

var db = {
  urlsSchema: new Schema({
    url: String,
    base_url: String,
    code: String,
    title: String,
    Visits: Number
  }),

  userSchema: new Schema({
    username: String,
    password: String
  })
};

module.exports = db;
