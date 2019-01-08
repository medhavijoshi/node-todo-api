const {mongoose} = require('../server/db/mongoose.js');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

const {ObjectID} = require('mongodb');

// Todo.remove({}).then((res) => {
//     console.log(res);
// });

Todo.findByIdAndRemove('5c345b587de4c73d5ac30b24').then((todo) => {
    console.log(todo);
});