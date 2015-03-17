module.exports = {
	getAll : function(db, req, res, next){
		db.all("SELECT * FROM bodyfat", function(err, rows){
	        res.json(rows);
	    });
	},
	get : function(db, req, res, next){
		var id = req.params.id;
		db.get("SELECT * FROM bodyfat WHERE id = " + id, function(err, row){
	        res.json(row);
	    });
	},
	create : function(db, req, res, next){
		db.run("INSERT INTO bodyfat (percent, date, user_id) values ($percent, $date, $user_id)", {
        	$percent: req.body.percent,
        	$date: req.body.date,
        	$user_id : req.body.user_id
      	});
	}
}