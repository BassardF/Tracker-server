module.exports = {
	getAll : function(db, req, res, next){
		db.all("SELECT * FROM 'measurement-goals'", function(err, rows){
	        res.json(rows);
	    });
	},
	get : function(db, req, res, next){
		var id = req.params.id;
		db.get("SELECT * FROM 'measurement-goals' WHERE id = " + id, function(err, row){
	        res.json(row);
	    });
	},
	create : function(db, req, res, next){
		db.run("INSERT INTO 'measurement-goals' (value, date, side, measurements_id, users_id) values ($value, $date, $side, $measurements_id, $users_id)", {
        	$value: req.body.value,
        	$date: req.body.date,
        	$side : req.body.side,
        	$measurements_id: req.body.measurements_id,
        	$users_id : req.body.users_id
      	}, function(error){
      		if(error !== null){
				res.status(500).json(error);
      		} else {
      			res.status(201).json(this);
      		}
      	});
	},
	byUser : function(db, req, res, next){
		db.all("SELECT * FROM 'measurement-goals' WHERE users_id = $user_id", {
			$user_id : req.params.user_id 
		}, function(err, row){
	        res.json(row);
	    });
	},

}