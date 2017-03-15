
var express = require('express');
var app = express();
app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });
app.get('/', function(req, res){
  res.json([{id:0, completed: false, text: 'chuong vo'}]);
})
app.listen(9090, function(){console.log("Server is running at port 9090...")});
