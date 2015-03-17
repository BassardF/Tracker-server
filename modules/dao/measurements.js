module.exports = {
	getAll : function(db, req, res, next){
		db.all("SELECT * FROM measurements INNER JOIN lines on lines.measurements_id = measurements.id", function(err, rows){
	        res.json(rows);
	    });
	},
	get : function(db, req, res, next){
		var id = req.params.id;
		db.get("SELECT * FROM measurements WHERE id = " + id, function(err, row){
	        res.json(row);
	    });
	},
	create : function(db, req, res, next){
		db.run("INSERT INTO measurements (name) values ($name)", {
        	$name: req.body.name
      	}, function(error){
      		if(error !== null){
				res.status(500).json(error);
      		} else {
      			res.status(201).json(this);
      		}
      	});
	}

}