
  var orm = require("../config/orm.js");

  var burger = {
  	
    all: function(callBack) {
  		orm.all("Burgers", function(res){
  			callBack(res);
  		});
  	},

    create: function(cols,vals,callback){
      orm.create("burgers",cols,vals,function(res) {
        callback(res);
      });
    },

    update: function(objColVals,condition, callback){
      orm.update("burgers",objColVals, condition, function(res){
        callback(res);
      });
    }
  }


  module.exports = burger;