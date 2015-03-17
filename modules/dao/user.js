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
		db.run("INSERT INTO users (name, email, password) values ($name, $email, $password)", {
        	$name: req.body.name,
        	$email: req.body.email,
        	$password : req.body.password
      	});
	}

}