
var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

// Render all the burger data
router.get("/", function(req,res){
  burger.all(function(data){
    var hbsObject = {
    	burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Create a new Burger
router.post("/burgers", function(req,res){
  burger.create([
  	  "burger_name","devoured"
  	],[
      req.body.name, false
  	],function() {
  		res.redirect("/");
  	});
});

router.put("/brgers/:id", function(req,res){
  var condition = "id = " + req.params.id;

  console.log("condition",condition);

  burger.update({
    devoured: true
  }, condition, function() {
    res.redirect("/");
  });
});

module.exports = router;