var express = require('express');
var router = express.Router();
var Post = require('../models/post');

/* GET display page. */
router.get('/display', function(req, res) {
	Post.find({}, function(err, docs){
		res.render('display', { 
  			title: 'Display', 
  			posts: docs
  		});
	}); 
});

module.exports = router;
