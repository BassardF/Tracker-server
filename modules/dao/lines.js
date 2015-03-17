module.exports = {
	getAll : function(db, req, res, next){
		db.all("SELECT * FROM lines", function(err, rows){
	        res.json(rows);
	    });
	},
	get : function(db, req, res, next){
		var id = req.params.id;
		db.get("SELECT * FROM lines WHERE id = " + id, function(err, row){
	        res.json(row);
	    });
	},
	create : function(db, req, res, next){
		db.run("INSERT INTO lines (x1, y1, x2, y2, measurements_id) values ($x1, $y1, $x2, $y2, $measurements_id)", {
        	$x1: req.body.x1,
        	$y1: req.body.y1,
        	$x2: req.body.x2,
        	$y2: req.body.y2,
        	$measurements_id : req.body.measurements_id
      	});
	}

}