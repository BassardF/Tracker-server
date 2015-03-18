module.exports = {
	getAll : function(db, req, res, next){
		db.all("SELECT * FROM 'bodyfat-goals'", function(err, rows){
	        res.json(rows);
	    });
	},
	get : function(db, req, res, next){
		var id = req.params.id;
		db.get("SELECT * FROM 'bodyfat-goals' WHERE id = " + id, function(err, row){
	        res.json(row);
	    });
	},
	create : function(db, req, res, next){
		db.run("INSERT INTO 'bodyfat-goals' (percent, date, date_reached, users_id) values ($percent, $date, $date_reached, $users_id)", {
        	$percent: req.body.percent,
        	$date: req.body.date,
        	$date_reached : req.body.date_reached ? req.body.date_reached : null,
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
		db.all("SELECT * FROM 'bodyfat-goals' WHERE users_id = $user_id", {
			$user_id : req.params.user_id
		}, function(err, rows){
	        res.json(rows);
	    });
	},
	usersLast : function(db, req, res, next){
		var user_id = req.params.user_id;
		db.get("SELECT * FROM 'bodyfat-goals' WHERE users_id = " + user_id + " ORDER BY date DESC LIMIT 1", function(err, row){
	        res.json(row);
	    });
	}

}