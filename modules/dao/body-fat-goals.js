module.exports = {
	getAll : function(db, req, res, next){
		db.all("SELECT * FROM bodyfat-goals", function(err, rows){
	        res.json(rows);
	    });
	},
	get : function(db, req, res, next){
		var id = req.params.id;
		db.get("SELECT * FROM bodyfat-goals WHERE id = " + id, function(err, row){
	        res.json(row);
	    });
	},
	create : function(db, req, res, next){
		db.run("INSERT INTO bodyfat-goals (percent, date, date_reached, users_id) values ($percent, $date, $date_reached, $users_id)", {
        	$percent: req.body.percent,
        	$date: req.body.date,
        	$date_reached : req.body.date_reached,
			$users_id : req.body.users_id
      	});
	}

}