module.exports = {
	getAll : function(db, req, res, next){
		db.all("SELECT * FROM areas", function(err, rows){
	        res.json(rows);
	    });
	},
	get : function(db, req, res, next){
		var id = req.params.id;
		db.get("SELECT * FROM areas WHERE id = " + id, function(err, row){
	        res.json(row);
	    });
	},
	create : function(db, req, res, next){
		db.run("INSERT INTO areas (name, class, side) values ($name, $class, $side)", {
        	$name: req.body.name,
        	$class: req.body.class,
        	$side : req.body.side
      	}, function(error){
      		if(error !== null){
				res.status(500).json(error);
      		} else {
      			res.status(201).json(this);
      		}
      	});
	}
}