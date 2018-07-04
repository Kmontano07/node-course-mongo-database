const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id:"5b3c25a95380e461fec5201b"}).then((todo) => {

});

Todo.findByIdAndRemove("5b3c25a95380e461fec5201b").then((todo) => {
  console.log(todo);
});
