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

//BodyFat
router.get('/body-fat', function(req, res, next) {
  	requests.bodyFat.getAll(req, res, next);
});

router.get('/body-fat/:id', function(req, res, next) {
  	requests.bodyFat.get(req, res, next);
});

router.post('/body-fat', function(req, res, next) {
  	requests.bodyFat.create(req, res, next);
});

//BodyFatGoals
router.get('/body-fat-goals', function(req, res, next) {
  	requests.bodyFatGoals.getAll(req, res, next);
});

router.get('/body-fat-goals/:id', function(req, res, next) {
  	requests.bodyFatGoals.get(req, res, next);
});

router.post('/body-fat-goals', function(req, res, next) {
  	requests.bodyFatGoals.create(req, res, next);
});

//BodyWeight
router.get('/body-weight', function(req, res, next) {
  	requests.bodyWeight.getAll(req, res, next);
});

router.get('/body-weight/:id', function(req, res, next) {
  	requests.bodyWeight.get(req, res, next);
});

router.post('/body-weight', function(req, res, next) {
  	requests.bodyWeight.create(req, res, next);
});

//BodyWeightGoals
router.get('/body-weight-goals', function(req, res, next) {
  	requests.bodyWeightGoals.getAll(req, res, next);
});

router.get('/body-weight-goals/:id', function(req, res, next) {
  	requests.bodyWeightGoals.get(req, res, next);
});

router.post('/body-weight-goals', function(req, res, next) {
  	requests.bodyWeightGoals.create(req, res, next);
});

//Exercices
router.get('/exercices', function(req, res, next) {
  	requests.exercices.getAll(req, res, next);
});

router.get('/exercices/:id', function(req, res, next) {
  	requests.exercices.get(req, res, next);
});

router.post('/exercices', function(req, res, next) {
  	requests.exercices.create(req, res, next);
});

//Lines
router.get('/lines', function(req, res, next) {
  	requests.lines.getAll(req, res, next);
});

router.get('/lines/:id', function(req, res, next) {
  	requests.lines.get(req, res, next);
});

router.post('/lines', function(req, res, next) {
  	requests.lines.create(req, res, next);
});

//Measurements
router.get('/measurements', function(req, res, next) {
  	requests.measurements.getAll(req, res, next);
});

router.get('/measurements/:id', function(req, res, next) {
  	requests.measurements.get(req, res, next);
});

router.post('/measurements', function(req, res, next) {
  	requests.measurements.create(req, res, next);
});

//MeasurementsGoals
router.get('/measurements-goals', function(req, res, next) {
  	requests.measurementsGoals.getAll(req, res, next);
});

router.get('/measurements-goals/:id', function(req, res, next) {
  	requests.measurementsGoals.get(req, res, next);
});

router.post('/measurements-goals', function(req, res, next) {
  	requests.measurementsGoals.create(req, res, next);
});

//PerformanceGoals
router.get('/performance-goals', function(req, res, next) {
  	requests.performanceGoals.getAll(req, res, next);
});

router.get('/performance-goals/:id', function(req, res, next) {
  	requests.performanceGoals.get(req, res, next);
});

router.post('/performance-goals', function(req, res, next) {
  	requests.performanceGoals.create(req, res, next);
});


//Export
module.exports = router;