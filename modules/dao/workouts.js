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
      			res.status(201).json(this);
      		}
      	});
	}

}