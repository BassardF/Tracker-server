module.exports = {
	getAll : function(db, req, res, next){
		db.all("SELECT * FROM schedules", function(err, rows){
	        res.json(rows);
	    });
	},
	get : function(db, req, res, next){
		var id = req.params.id;
		db.get("SELECT * FROM schedules WHERE id = " + id, function(err, row){
	        res.json(row);
	    });
	},
	create : function(db, req, res, next){
		db.run("INSERT INTO schedules (date, workouts_id, users_id) values ($date, $workouts_id, $users_id)", {
        	$date: req.body.date,
        	$workouts_id: req.body.workouts_id,
        	$users_id : req.body.users_id
      	}, function(error){
      		if(error !== null){
				res.status(500).json(error);
      		} else {
      			res.status(201).json(this);
      		}
      	});
	}

}