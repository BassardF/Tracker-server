module.exports = {
	getAll : function(db, req, res, next){
		db.all("SELECT * FROM users", function(err, rows){
	        res.json(rows);
	    });
	},
	get : function(db, req, res, next){
		var id = req.params.id;
		db.get("SELECT * FROM users WHERE id = " + id, function(err, row){
	        res.json(row);
	    });
	},
	create : function(db, req, res, next){
		db.run("INSERT INTO users (value, date, side, measurements_id, users_id) values ($value, $date, $side, $measurements_id, $users_id)", {
        	$value: req.body.value,
        	$date: req.body.date,
        	$side : req.body.side,
        	$measurements_id: req.body.measurements_id,
        	$users_id : req.body.users_id
      	});
	}

}