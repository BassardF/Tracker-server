var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');

var user = require('./user.js');
var area = require('./area.js');

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
	}
}