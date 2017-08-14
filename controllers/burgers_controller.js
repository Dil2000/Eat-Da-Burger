// import the following:
// Express
// burger.js
// Create the router for the app, and export the router at the end of your file.

var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

// Render all the burger data
router.get("*", function(req,res){
  burger.all(function(data){
    var hbsObject = {
    	burgers:data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Create a new Burger
router.post("/", function(req,res){
  burger.create([
  	  "burger_name","devoured"
  	],[
      req.body.name, false
  	],function() {
  		res.redirect("/");
  	});
});

module.exports = router;