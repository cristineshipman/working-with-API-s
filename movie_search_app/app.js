var express = require("express");
var app = express();
var request = require("request");

// config app
app.set("view engine", "ejs");

app.get("/results", function(req, res){
  request("http://www.omdbapi.com/?s=h&apikey=thewdb", function(error, response, body){
    if (!error && response.statusCode == 200){
      var data = JSON.parse(body);
      res.render("results", {data: data});
    }
  });
});

app.listen(3000, function(){
  console.log("magic is happening")
});
