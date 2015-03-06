var mongoose = require('mongoogse');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

mongoose.connect('mongodb://localhst/shortly')
var db = mongoose.connection
module.exports = db

// var db = {
//   urlSchema: new Schema({
//     url: String,
//     base_url: String,
//     code: String,
//     title: String,
//     visits: Number,

//   }),

//   userSchema: new Schema({
//     username: String,
//     password: String
//   })
// };

// db.urlSchema.post('init', function(doc){
//   var shasum = crypto.createHash('sha1');
//   shasum.update(db.urlSchema.url);
//   db.urlSchema.code = shasum.digetst('hex').slice(0, 5);
// });

// db.userSchema.pre('save', function(next){
//   var cipher = Promise.promisify(bcrypt.hash);
//     return cipher(db.userSchema.password, null, null)
//       .then(function(hash) {
//         db.userSchema.password = hash;
//       });
// })


// module.exports = db;
