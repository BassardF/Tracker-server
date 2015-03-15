var express = require('express');
var router = express.Router();
var requests = require('../modules/requests.js');


router.get('/', function(req, res, next) {
  	requests.test(req, res, next);
});

router.get('/2', function(req, res, next) {
  	requests.test2(req, res, next);
});

module.exports = router;