// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
	// Display the burgers
	all: function(tableInput,callback) {
	  var queryString = "SELECT * FROM " + tableInput + ";";
	  connection.query(queryString, function(err,result){
	  	if (err){
	  	  throw err;
	  	}
	  	callback (result);
	  });
	},

	// Create a new burger
	create: function(table,cols,vals,callback){
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestiononMarks(vals.length);
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, vals, function(err, result){
			if (err) {
				throw err;
			}
			callback(result);
		});
	}

}



// selectAll()
// insertOne()
// updateOne()



module.exports = orm;