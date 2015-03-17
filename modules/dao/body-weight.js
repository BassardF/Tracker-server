module.exports = {
	getAll : function(db, req, res, next){
		db.all("SELECT * FROM bodyweight", function(err, rows){
	        res.json(rows);
	    });
	},
	get : function(db, req, res, next){
		var id = req.params.id;
		db.get("SELECT * FROM bodyweight WHERE id = " + id, function(err, row){
	        res.json(row);
	    });
	},
	create : function(db, req, res, next){
		db.run("INSERT INTO bodyweight (weight, date, users_id) values ($weight, $date, $users_id)", {
        	$weight: req.body.weight,
        	$date: req.body.date,
        	$users_id : req.body.users_id
      	}, function(error){
      		if(error !== null){
				res.status(500).json(error);
      		} else {
      			res.status(201).json(this);
      		}
      	});
	}

}