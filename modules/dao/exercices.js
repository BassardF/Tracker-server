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
      	});
	}

}