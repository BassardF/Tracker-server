module.exports = {
	getAll : function(db, req, res, next){
		db.all("SELECT * FROM 'user-measurements'", function(err, rows){
	        res.json(rows);
	    });
	},
	get : function(db, req, res, next){
		var id = req.params.id;
		db.get("SELECT * FROM 'user-measurements' WHERE id = " + id, function(err, row){
	        res.json(row);
	    });
	},
	byUser : function(db, req, res, next){
		db.all("SELECT * FROM 'user-measurements' WHERE users_id = $user_id", {
			$user_id : req.params.user_id
		}, function(err, rows){
	        res.json(rows);
	    });
	},
	create : function(db, req, res, next){
		db.run("INSERT INTO 'user-measurements' (value, date, measurements_id, users_id) values ($value, $date, $measurements_id, $users_id)", {
        	$value: req.body.value,
        	$date: req.body.date,
        	$measurements_id : req.body.measurements_id,
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