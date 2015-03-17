module.exports = {
	getAll : function(db, req, res, next){
		db.all("SELECT * FROM schedules-exercices", function(err, rows){
	        res.json(rows);
	    });
	},
	get : function(db, req, res, next){
		var id = req.params.id;
		db.get("SELECT * FROM schedules-exercices WHERE id = " + id, function(err, row){
	        res.json(row);
	    });
	},
	create : function(db, req, res, next){
		db.run("INSERT INTO schedules-exercices (count, rest, reps, weight, date, exercices_id, schedules_id) values (#count, #rest, #reps, #weight, #date, #exercices_id, #schedules_id)", {
        	$count: req.body.count,
        	$rest: req.body.rest,
        	$reps : req.body.reps,
        	$weight: req.body.weight,
        	$date: req.body.date,
        	$exercices_id : req.body.exercices_id,
			$schedules_id : req.body.schedules_id
      	});
	}

}