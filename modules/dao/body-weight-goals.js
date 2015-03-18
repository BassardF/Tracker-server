module.exports = {
	getAll : function(db, req, res, next){
		db.all("SELECT * FROM bodyweight-goals", function(err, rows){
	        res.json(rows);
	    });
	},
	get : function(db, req, res, next){
		var id = req.params.id;
		db.get("SELECT * FROM bodyweight-goals WHERE id = " + id, function(err, row){
	        res.json(row);
	    });
	},
	create : function(db, req, res, next){
		db.run("INSERT INTO bodyweight-goals (weight, date, date_reached, users_id) values ($weight, $date, $date_reached, $users_id)", {
        	$weight: req.body.weight,
        	$date: req.body.date,
        	$date_reached : req.body.date_reached,
			$users_id : req.body.users_id
      	}, function(error){
      		if(error !== null){
				res.status(500).json(error);
      		} else {
      			res.status(201).json(this);
      		}
      	});
	},
	usersLast : function(db, req, res, next){
		var user_id = req.params.user_id;
		db.get("SELECT * FROM bodyweight-goals WHERE users_id = " + user_id, function(err, row){
	        res.json(row);
	    });
	},
	byUser : function(db, req, res, next){
		var user_id = req.params.user_id;
		db.get("SELECT * FROM bodyweight-goals WHERE users_id = " + user_id + " ORDER BY date DESC LIMIT 1", function(err, row){
	        res.json(row);
	    });
	}

}