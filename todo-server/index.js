
var express = require('express');
var app = express();
app.get('/', function(req, res){
  res.json([{id:0, completed: false, text: 'chuong vo'}]);
})
app.listen(9090, function(){console.log("Server is running at port 9090...")});
