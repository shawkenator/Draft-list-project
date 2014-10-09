var express = require('express');
var router = express.Router();
var Post = require('../models/post');

/* GET home page. */
router.get('/', function(req, res) {
	Post.find({}, function(err, docs){
		res.render('index', { 
  			title: 'Express', 
  			posts: docs
  		});
	}); 
});

/* GET home page. */
router.get('/form', function(req, res) {
	Post.find({}, function(err, docs){
		res.render('form', { 
  			title: 'Add Form', 
  			posts: docs
  		});
	}); 
});


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
