module.exports = {
	getAll : function(db, req, res, next){
		db.all("SELECT * FROM exercices", function(err, rows){
	        res.json(rows);
	    });
	},
	get : function(db, req, res, next){
		var id = req.params.id;
		db.get("SELECT * FROM exercices WHERE id = " + id, function(err, row){
	        res.json(row);
	    });
	},
	create : function(db, req, res, next){
		db.run("INSERT INTO exercices (name, description, users_id) values ($name, $description, $users_id)", {
        	$name: req.body.name,
        	$description: req.body.description,
        	$users_id : req.body.users_id
      	}, function(error){
      		if(error !== null){
				res.status(500).json(error);
      		} else {
				for (var i = 0; i < req.body.areas.length; i++) {
					var id = req.body.areas[i];
					db.run("INSERT INTO 'exercices_has_areas' (exercices_id, areas_id) values ($exercices_id, $areas_id)", {
			        	$exercices_id: this.lastID,
			        	$areas_id: id
			      	});
				}
				
      			res.status(201).json(this);
      		}
      	});
	}

}