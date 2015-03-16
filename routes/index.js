var express = require('express');
var router = express.Router();
var requests = require('../modules/requests.js');

//Users
router.get('/users', function(req, res, next) {
  	requests.users.getAll(req, res, next);
});

router.get('/users/:id', function(req, res, next) {
  	requests.users.get(req, res, next);
});

router.post('/users', function(req, res, next) {
  	requests.users.create(req, res, next);
});

//Areas
router.get('/areas', function(req, res, next) {
  	requests.areas.getAll(req, res, next);
});

router.get('/areas/:id', function(req, res, next) {
  	requests.areas.get(req, res, next);
});

router.post('/areas', function(req, res, next) {
  	requests.areas.create(req, res, next);
});


//Export
module.exports = router;