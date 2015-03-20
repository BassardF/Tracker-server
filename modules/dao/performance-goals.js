module.exports = {
	getAll : function(db, req, res, next){
		db.all("SELECT * FROM 'performance-goals'", function(err, rows){
	        res.json(rows);
	    });
	},
	get : function(db, req, res, next){
		var id = req.params.id;
		db.get("SELECT * FROM 'performance-goals' WHERE id = " + id, function(err, row){
	        res.json(row);
	    });
	},
	create : function(db, req, res, next){
		db.run("INSERT INTO 'performance-goals' (count, rest, weight, date, reps, date_reached, exercices_id, users_id) values ($count, $rest, $weight, $date, $reps, $date_reached, $exercices_id, $users_id)", {
        	$count: req.body.count,
        	$rest: req.body.rest,
        	$weight : req.body.weight,
        	$date: req.body.date,
        	$reps: req.body.reps,
        	$date_reached : req.body.date_reached ? req.body.date_reached : null,
        	$exercices_id: req.body.exercices_id,
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
		db.all("SELECT * FROM 'performance-goals' WHERE users_id = $user_id", {
			$user_id : req.params.user_id 
		}, function(err, row){
	        res.json(row);
	    });
	}

}