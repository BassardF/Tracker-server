module.exports = {
	getAll : function(db, req, res, next){
		db.all("SELECT * FROM workouts-exercices", function(err, rows){
	        res.json(rows);
	    });
	},
	get : function(db, req, res, next){
		var id = req.params.id;
		db.get("SELECT * FROM workouts-exercices WHERE id = " + id, function(err, row){
	        res.json(row);
	    });
	},
	create : function(db, req, res, next){
		db.run("INSERT INTO workouts-exercices (rest, count, reps, weight, exercices_id, workouts_id) values (rest, count, reps, weight, exercices_id, workouts_id)", {
        	$rest: req.body.rest,
        	$count: req.body.count,
        	$reps : req.body.reps,
        	$weight: req.body.weight,
        	$exercices_id: req.body.exercices_id,
        	$workouts_id : req.body.workouts_id			
      	}, function(error){
      		if(error !== null){
				res.status(500).json(error);
      		} else {
      			res.status(201).json(this);
      		}
      	});
	}

}