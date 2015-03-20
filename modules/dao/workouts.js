module.exports = {
	getAll : function(db, req, res, next){
		db.all("SELECT * FROM workouts", function(err, rows){
	        res.json(rows);
	    });
	},
	get : function(db, req, res, next){
		var id = req.params.id;
		db.get("SELECT * FROM workouts WHERE id = " + id, function(err, row){
	        res.json(row);
	    });
	},
	create : function(db, req, res, next){
		db.run("INSERT INTO workouts (name, description, goal, users_id) values ($name, $description, $goal, $users_id)", {
        	$name: req.body.name,
        	$description: req.body.description,
        	$goal : req.body.goal,
        	$users_id : req.body.users_id
      	}, function(error){
      		if(error !== null){
				res.status(500).json(error);
      		} else {
      			for (var i = 0; i < req.body.exercices.length; i++) {
	      			var exercice = req.body.exercices[i];
	      			db.run("INSERT INTO 'workouts-exercices' (rest, count, reps, weight, exercices_id, workouts_id) values ($rest, $count, $reps, $weight, $exercices_id, $workouts_id)", {
				    	$rest: exercice.rest,
				    	$count: exercice.count,
				    	$reps : exercice.reps,
				    	$weight : exercice.weight,
				    	$exercices_id : exercice.exercice_id,
				    	$workouts_id : this.lastID
				  	});
				}
				res.status(201).json(this);
      		}
      	});
	}

}