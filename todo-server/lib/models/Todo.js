var bluebird = require('bluebird')
var mongoose = bluebird.promisifyAll(require('mongoose'))
mongoose.connect('mongodb://localhost/tododb');

var TodoSchema = new mongoose.Schema({
  text: String,
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Todo', TodoSchema, 'Todo');
