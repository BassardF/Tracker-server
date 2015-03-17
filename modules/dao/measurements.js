module.exports = {
	getAll : function(db, req, res, next){
		db.all("SELECT * FROM measurements", function(err, rows){
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
        	$x1: req.body.name
      	});
	}

}