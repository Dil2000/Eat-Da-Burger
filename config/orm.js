// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
	all: function(tableInput,callback) {
	  var queryString = "SELECT * FROM " + tableInput + ";";
	  connection.query(queryString, function(err,result){
	  	if (err){
	  	  throw err;
	  	}
	  	callback (result);
	  });
	}
}


// selectAll()
// insertOne()
// updateOne()









module.exports = orm;