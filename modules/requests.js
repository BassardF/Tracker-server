var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');

var user = require('./user.js');
var area = require('./area.js');
var bodyFat = require('./body-fat.js');
var bodyFatGoals = require('./body-fat-goals.js');
var bodyWeight = require('./body-weight.js');
var bodyWeightGoals = require('./body-weight-goals.js');
var exercices = require('./exercices.js');
var lines = require('./lines.js');
var measurements = require('./measurements.js');
var measurementsGoals = require('./measurements-goals.js');
var performanceGoals = require('./performance-goals.js');



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
		}
	}
	
}