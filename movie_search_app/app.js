var express = require("express");
var app = express();
var request = require("request");

app.get("/results", function(req, res){
  res.send("Hello, it works!");
});

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Movie App has started!!!");
});


// http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb
