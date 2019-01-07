var mongoose = require('mongoose');

//Todo model
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true, //removes any white spaces

    },
    completed: {
        type: Boolean,
        default: false,
    }, 
    completedAt : {
        type: Number,
        default: null
    }
});

module.exports = {Todo};

//One Document addition
// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved doc: ',doc);
// }, (err) => {
//     console.log('Unable to save the doc ', err);
// });

// var todo2 = new Todo({
//     text: 23
// });

// todo2.save().then((doc)=>{
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//     console.log(err);
// });