var express = require('express');
var path = require('path');
var router = express.Router();

/* GET Chess page. */
router.get('/', function(req, res, next) {
  res.render('chess', {});
});

module.exports = router;