var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
	name: String,
	password: String,
	fbId: String
});

module.exports = mongoose.model('author', AuthorSchema);
