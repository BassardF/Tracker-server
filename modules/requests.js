var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');

var user = require('./dao/user.js');
var area = require('./dao/area.js');
var bodyFat = require('./dao/body-fat.js');
var bodyFatGoals = require('./dao/body-fat-goals.js');
var bodyWeight = require('./dao/body-weight.js');
var bodyWeightGoals = require('./dao/body-weight-goals.js');
var exercices = require('./dao/exercices.js');
var lines = require('./dao/lines.js');
var measurements = require('./dao/measurements.js');
var measurementsGoals = require('./dao/measurements-goals.js');
var performanceGoals = require('./dao/performance-goals.js');
var schedules = require('./dao/schedules.js');
var schedulesExercices = require('./dao/schedules-exercices.js');
var userMeasurements = require('./dao/user-measurements.js');
var workouts = require('./dao/workouts.js');
var workoutsExercices = require('./dao/workouts-exercices.js');


/* Create the Database if needed */

fs.exists('database', function (exists) {
  db = new sqlite3.Database('database');

  if (!exists) {
    console.info('Creating database. This may take a while...');
    fs.readFile('scripts/database.sql', 'utf8', function (err, data) {
      if (err) throw err;

      db.exec(data, function (err) {
        if (err) throw err;
        console.info('Done.');
      });

    });
  }
});

/* Modules */

module.exports = {
	users : {
		getAll : function(req, res, next){
			user.getAll(db, req, res, next);
		},
		get : function(req, res, next){
			user.get(db, req, res, next);
		},
		create : function(req, res, next){
			user.create(db, req, res, next);
		}
	},
	areas : {
		getAll : function(req, res, next){
			area.getAll(db, req, res, next);
		},
		get : function(req, res, next){
			area.get(db, req, res, next);
		},
		create : function(req, res, next){
			area.create(db, req, res, next);
		}
	},
	bodyFat : {
		getAll : function(req, res, next){
			bodyFat.getAll(db, req, res, next);
		},
		get : function(req, res, next){
			bodyFat.get(db, req, res, next);
		},
		create : function(req, res, next){
			bodyFat.create(db, req, res, next);
		},
		usersLast : function(req, res, next){
			bodyFat.usersLast(db, req, res, next);
		},
		byUser : function(req, res, next){
			bodyFat.byUser(db, req, res, next);
		}
	},
	bodyFatGoals : {
		getAll : function(req, res, next){
			bodyFatGoals.getAll(db, req, res, next);
		},
		get : function(req, res, next){
			bodyFatGoals.get(db, req, res, next);
		},
		create : function(req, res, next){
			bodyFatGoals.create(db, req, res, next);
		},
		usersLast : function(req, res, next){
			bodyFatGoals.usersLast(db, req, res, next);
		},
		byUser : function(req, res, next){
			bodyFatGoals.byUser(db, req, res, next);
		}
	},
	bodyWeight : {
		getAll : function(req, res, next){
			bodyWeight.getAll(db, req, res, next);
		},
		get : function(req, res, next){
			bodyWeight.get(db, req, res, next);
		},
		create : function(req, res, next){
			bodyWeight.create(db, req, res, next);
		},
		usersLast : function(req, res, next){
			bodyWeight.usersLast(db, req, res, next);
		},
		byUser : function(req, res, next){
			bodyWeight.byUser(db, req, res, next);
		}
	},
	bodyWeightGoals : {
		getAll : function(req, res, next){
			bodyWeightGoals.getAll(db, req, res, next);
		},
		get : function(req, res, next){
			bodyWeightGoals.get(db, req, res, next);
		},
		create : function(req, res, next){
			bodyWeightGoals.create(db, req, res, next);
		},
		usersLast : function(req, res, next){
			bodyWeightGoals.usersLast(db, req, res, next);
		},
		byUser : function(req, res, next){
			bodyWeightGoals.byUser(db, req, res, next);
		}
	},
	exercices : {
		getAll : function(req, res, next){
			exercices.getAll(db, req, res, next);
		},
		get : function(req, res, next){
			exercices.get(db, req, res, next);
		},
		create : function(req, res, next){
			exercices.create(db, req, res, next);
		}
	},
	lines : {
		getAll : function(req, res, next){
			lines.getAll(db, req, res, next);
		},
		get : function(req, res, next){
			lines.get(db, req, res, next);
		},
		create : function(req, res, next){
			lines.create(db, req, res, next);
		}
	},
	measurements : {
		getAll : function(req, res, next){
			measurements.getAll(db, req, res, next);
		},
		get : function(req, res, next){
			measurements.get(db, req, res, next);
		},
		create : function(req, res, next){
			measurements.create(db, req, res, next);
		}
	},
	measurementsGoals : {
		getAll : function(req, res, next){
			measurementsGoals.getAll(db, req, res, next);
		},
		get : function(req, res, next){
			measurementsGoals.get(db, req, res, next);
		},
		create : function(req, res, next){
			measurementsGoals.create(db, req, res, next);
		},
		byUser : function(req, res, next){
			measurementsGoals.byUser(db, req, res, next);
		}
	},
	performanceGoals : {
		getAll : function(req, res, next){
			performanceGoals.getAll(db, req, res, next);
		},
		get : function(req, res, next){
			performanceGoals.get(db, req, res, next);
		},
		create : function(req, res, next){
			performanceGoals.create(db, req, res, next);
		},
		byUser : function(req, res, next){
			performanceGoals.byUser(db, req, res, next);
		}
	},
	schedules : {
		getAll : function(req, res, next){
			schedules.getAll(db, req, res, next);
		},
		get : function(req, res, next){
			schedules.get(db, req, res, next);
		},
		create : function(req, res, next){
			schedules.create(db, req, res, next);
		},
		byUser : function(req, res, next){
			schedules.byUser(db, req, res, next);
		}
	},
	schedulesExercices : {
		getAll : function(req, res, next){
			schedulesExercices.getAll(db, req, res, next);
		},
		get : function(req, res, next){
			schedulesExercices.get(db, req, res, next);
		},
		byUser : function(req, res, next){
			schedulesExercices.byUser(db, req, res, next);
		},
		byExercice : function(req, res, next){
			schedulesExercices.byExercice(db, req, res, next);
		},
		create : function(req, res, next){
			schedulesExercices.create(db, req, res, next);
		},
		bySchedule : function(req, res, next){
			schedulesExercices.bySchedule(db, req, res, next);
		},
		update : function(req, res, next){
			schedulesExercices.update(db, req, res, next);
		}
	},
	userMeasurements : {
		getAll : function(req, res, next){
			userMeasurements.getAll(db, req, res, next);
		},
		get : function(req, res, next){
			userMeasurements.get(db, req, res, next);
		},
		byUser : function(req, res, next){
			userMeasurements.byUser(db, req, res, next);
		},
		create : function(req, res, next){
			userMeasurements.create(db, req, res, next);
		}
	},
	workouts : {
		getAll : function(req, res, next){
			workouts.getAll(db, req, res, next);
		},
		get : function(req, res, next){
			workouts.get(db, req, res, next);
		},
		create : function(req, res, next){
			workouts.create(db, req, res, next);
		}
	},
	workoutsExercices : {
		getAll : function(req, res, next){
			workoutsExercices.getAll(db, req, res, next);
		},
		get : function(req, res, next){
			workoutsExercices.get(db, req, res, next);
		},
		create : function(req, res, next){
			workoutsExercices.create(db, req, res, next);
		}
	}
	
}