var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , hint: 'Don\'t move your pawns ever', guide: path.join(".", 'images', 'your_guide.png')});
});

module.exports = router;
