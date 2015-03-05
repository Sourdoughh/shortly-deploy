var schema = require('../mongoDBConfig');
var mongoose = require('mongoose');
var crypto = require('crypto');

mongoose.model('link', schema.urlSchema);

