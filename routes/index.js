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

router.get('/body-fat/users/:user_id/last', function(req, res, next) {
  	requests.bodyFat.usersLast(req, res, next);
});

router.get('/body-fat/users/:user_id', function(req, res, next) {
  	requests.bodyFat.byUser(req, res, next);
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

router.get('/body-fat-goals/users/:user_id/last', function(req, res, next) {
  	requests.bodyFatGoals.usersLast(req, res, next);
});

router.get('/body-fat-goals/users/:user_id', function(req, res, next) {
  	requests.bodyFatGoals.byUser(req, res, next);
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

router.get('/body-weight/users/:user_id/last', function(req, res, next) {
  	requests.bodyWeight.usersLast(req, res, next);
});

router.get('/body-weight/users/:user_id', function(req, res, next) {
  	requests.bodyWeight.byUser(req, res, next);
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

router.get('/body-weight-goals/users/:user_id/last', function(req, res, next) {
  	requests.bodyWeightGoals.usersLast(req, res, next);
});

router.get('/body-weight-goals/users/:user_id', function(req, res, next) {
  	requests.bodyWeightGoals.byUser(req, res, next);
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

router.get('/measurements-goals/users/:user_id', function(req, res, next) {
  	requests.measurementsGoals.byUser(req, res, next);
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

router.get('/performance-goals/users/:user_id', function(req, res, next) {
  	requests.performanceGoals.byUser(req, res, next);
});

router.post('/performance-goals', function(req, res, next) {
  	requests.performanceGoals.create(req, res, next);
});

//Schedules
router.get('/schedules', function(req, res, next) {
  	requests.schedules.getAll(req, res, next);
});

router.get('/schedules/:id', function(req, res, next) {
  	requests.schedules.get(req, res, next);
});

router.get('/schedules/users/:user_id', function(req, res, next) {
  	requests.schedules.byUser(req, res, next);
});

router.post('/schedules', function(req, res, next) {
  	requests.schedules.create(req, res, next);
});

//SchedulesExercices
router.get('/schedules-exercices', function(req, res, next) {
  	requests.schedulesExercices.getAll(req, res, next);
});

router.get('/schedules-exercices/:id', function(req, res, next) {
  	requests.schedulesExercices.get(req, res, next);
});

router.get('/schedules-exercices/schedules/:schedule_id', function(req, res, next) {
  	requests.schedulesExercices.bySchedule(req, res, next);
});

router.get('/schedules-exercices/users/:user_id', function(req, res, next) {
  	requests.schedulesExercices.byUser(req, res, next);
});

router.get('/schedules-exercices/users/:user_id/exercices/:exercice_id', function(req, res, next) {
  	requests.schedulesExercices.byExercice(req, res, next);
});

router.post('/schedules-exercices/:id', function(req, res, next) {
  	requests.schedulesExercices.update(req, res, next);
});

router.post('/schedules-exercices', function(req, res, next) {
  	requests.schedulesExercices.create(req, res, next);
});

//UserMeasurements
router.get('/user-measurements', function(req, res, next) {
  	requests.userMeasurements.getAll(req, res, next);
});

router.get('/user-measurements/:id', function(req, res, next) {
  	requests.userMeasurements.get(req, res, next);
});

router.get('/user-measurements/users/:user_id', function(req, res, next) {
  	requests.userMeasurements.byUser(req, res, next);
});

router.post('/user-measurements', function(req, res, next) {
  	requests.userMeasurements.create(req, res, next);
});

//Workouts
router.get('/workouts', function(req, res, next) {
  	requests.workouts.getAll(req, res, next);
});

router.get('/workouts/:id', function(req, res, next) {
  	requests.workouts.get(req, res, next);
});

router.post('/workouts', function(req, res, next) {
  	requests.workouts.create(req, res, next);
});

//WorkoutsExercices
router.get('/workouts-exercices', function(req, res, next) {
  	requests.workoutsExercices.getAll(req, res, next);
});

router.get('/workouts-exercices/:id', function(req, res, next) {
  	requests.workoutsExercices.get(req, res, next);
});

router.post('/workouts-exercices', function(req, res, next) {
  	requests.workoutsExercices.create(req, res, next);
});


//Export
module.exports = router;