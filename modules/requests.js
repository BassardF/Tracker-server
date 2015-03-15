var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('tracker');
var fs = require('fs');

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

	test : function(req, res, next){
		db.get("SELECT value FROM counts", function(err, row){
	        res.json({ "count" : row.value });
	    });
	}, 

	test2 : function(req, res, next){
		db.run("UPDATE counts SET value = value + 1 WHERE key = ?", "counter", function(err, row){
	        if (err){
	            console.err(err);
	            res.status(500);
	        }
	        else {
	            res.status(202);
	        }
	        res.end();
	    });
	}
}