
var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var Todo = require('./lib/models/Todo');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, UPDATE, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log("request: ", req.url, JSON.stringify(req.body));
  next();
});

app.get('/todos', function(req, res){
  Todo.find({}).then(todos => {
    todos = todos.map(todo=>Object.assign(todo._doc, {id: todo._id}));
    res.json(todos);
  }).catch(error=>console.log(error));
})

app.post('/todos', function(req, res){
  var todo = new Todo(req.body);
  todo.save((error, savedTodo) => {
    if(error) console.log(error)
    res.json(Object.assign(savedTodo._doc, {id: savedTodo._doc._id}));
  })
})

app.delete('/todos/:id', function(req, res){
  Todo.remove({_id: req.params.id}).then(()=> {
    res.json({removed: true})
  }).catch(error => console.log(error))
})

app.post('/todos/:id', function(req, res){
  Todo.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
  .then(updatedTodo => {
    res.json(Object.assign(updatedTodo._doc, {id: updatedTodo._id}))
  }).catch(error => console.log(error))
})

app.listen(9090, function(){console.log("Server is running at port 9090...")});
