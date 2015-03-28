module.exports = {
	getAll : function(db, req, res, next){
		db.all("SELECT * FROM 'schedules-exercices'", function(err, rows){
	        res.json(rows);
	    });
	},
	get : function(db, req, res, next){
		var id = req.params.id;
		db.get("SELECT * FROM 'schedules-exercices' WHERE id = " + id, function(err, row){
	        res.json(row);
	    });
	},
	byUser : function(db, req, res, next){
		db.all("SELECT * FROM (SELECT areas_id, sum(count) as count FROM (SELECT exercices.id, count('schedules-exercices'.id) as count FROM 'schedules-exercices' INNER JOIN exercices ON 'schedules-exercices'.exercices_id = exercices.id WHERE users_id = $user_id GROUP BY exercices.id) INNER JOIN 'exercices_has_areas' ON exercices_id = id GROUP BY areas_id) INNER JOIN areas on id = areas_id",{
			$user_id : req.params.user_id
		}, function(err, rows){
			console.log(err);
	        res.json(rows);
	    });
	},
	byExercice : function(db, req, res, next){
		db.all("SELECT * FROM 'schedules-exercices' INNER JOIN schedules ON schedules.id = schedules_id WHERE exercices_id = $exercice_id AND users_id = $user_id ORDER BY date ASC",{
			$exercice_id : req.params.exercice_id,
			$user_id : req.params.user_id
		}, function(err, rows){
			console.log(err);
	        res.json(rows);
	    });
	},
	bySchedule : function(db, req, res, next){
		var id = req.params.schedule_id;
		db.all("SELECT * FROM 'schedules-exercices' WHERE schedules_id = " + id, function(err, rows){
	        res.json(rows);
	    });
	},
	create : function(db, req, res, next){
		db.run("INSERT INTO 'schedules-exercices' (count, rest, reps, weight, date, exercices_id, schedules_id) values ($count, $rest, $reps, $weight, $date, $exercices_id, $schedules_id)", {
        	$count: req.body.count,
        	$rest: req.body.rest,
        	$reps : req.body.reps,
        	$weight: req.body.weight,
        	$date: req.body.date,
        	$exercices_id : req.body.exercices_id,
			$schedules_id : req.body.schedules_id
      	}, function(error){
      		if(error !== null){
				res.status(500).json(error);
      		} else {
      			res.status(201).json(this);
      		}
      	});
	},
	update: function(db, req, res, next){

		var id = req.params.id;
		db.run("UPDATE 'schedules-exercices' SET count=$count, rest=$rest, reps=$reps, weight=$weight, date=$date, exercices_id=$exercices_id, schedules_id=$schedules_id where id=$id", {
			$id : id,
        	$count: req.body.count,
        	$rest: req.body.rest,
        	$reps : req.body.reps,
        	$weight: req.body.weight,
        	$date: req.body.date,
        	$exercices_id : req.body.exercices_id,
			$schedules_id : req.body.schedules_id
      	}, function(error){
      		if(error !== null){
				res.status(500).json(error);
      		} else {
      			res.status(201).json(this);
      		}
      	});
	}


}