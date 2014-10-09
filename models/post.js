var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
	title: String,
	posted: Date,
	content: String,
	location: String,
	rating: String,
	brand: String,
	pricea: String,
	priceb: String,
	pricec: String
});

var Post = mongoose.model('post', postSchema);
module.exports = Post;