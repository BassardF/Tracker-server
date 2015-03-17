module.exports = {
	getAll : function(db, req, res, next){
		db.all("SELECT * FROM user-measurements", function(err, rows){
	        res.json(rows);
	    });
	},
	get : function(db, req, res, next){
		var id = req.params.id;
		db.get("SELECT * FROM user-measurements WHERE id = " + id, function(err, row){
	        res.json(row);
	    });
	},
	create : function(db, req, res, next){
		db.run("INSERT INTO user-measurements (value, date, measurements_id, users_id) values ($value, $date, $measurements_id, $users_id)", {
        	$value: req.body.value,
        	$date: req.body.date,
        	$measurements_id : req.body.measurements_id,
			$users_id : req.body.users_id
      	});
	}

}