 // import orm.js into burger.js

  // call the ORM functions using burger specific input for the ORM

  //export burgers.js


  var orm = require("../config/orm.js");

  var burger = {
  	all: function(callBack) {
  		orm.all("Burgers", function(res){
  			callBack(res);
  		});
  	}
  }

  module.exports = burger;