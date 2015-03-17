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
      	});
      	res.json(req.body);
	}
}