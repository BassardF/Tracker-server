module.exports = {
	getAll : function(db, req, res, next){
		db.all("SELECT * FROM schedules INNER JOIN workouts on workouts.id = schedules.workouts_id", function(err, rows){
	        res.json(rows);
	    });
	},
	get : function(db, req, res, next){
		var id = req.params.id;
		db.all("SELECT * FROM schedules INNER JOIN 'schedules-exercices' on 'schedules-exercices'.schedules_id on schedules.id WHERE id = $id", {
			$id : id
		}, function(err, rows){
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
      			var schedules_id = this.lastID;
      			db.all("SELECT * FROM 'workouts-exercices' where workouts_id = " +  req.body.workouts_id, function(err, rows){
					for (var i = 0; i < rows.length; i++) {
						var row = rows[i];
						db.run("INSERT INTO 'schedules-exercices' (count, rest, reps, weight, date, exercices_id, schedules_id) values ($count, $rest, $reps, $weight, $date, $exercices_id, $schedules_id)", {
				        	$count: row.count,
				        	$rest: row.rest,
				        	$reps : row.reps,
				        	$weight: row.weight,
				        	$date: req.body.date,
				        	$exercices_id : row.exercices_id,
				        	$schedules_id : schedules_id
				      	});
					}
					
				});
      			res.status(201).json(this);
      		}
      	});
	},
	byUser : function(db, req, res, next){
		db.all("SELECT *, schedules.id as id FROM schedules INNER JOIN workouts on workouts.id = schedules.workouts_id WHERE schedules.users_id = $user_id", {
			$user_id : req.params.user_id 
		}, function(err, row){
			console.log(err);
	        res.json(row);
	    });
	},
	delete : function(db, req, res, next){
		db.all("DELETE FROM schedules WHERE id = $id", {
			$id : req.params.id 
		}, function(err, row){
	        res.json("{}");
	    });
	}
}