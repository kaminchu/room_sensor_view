var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var dataSchema = new Schema({	'temperature' : Number,	'humidity' : Number,	'pressure' : Number});

module.exports = mongoose.model('data', dataSchema);
