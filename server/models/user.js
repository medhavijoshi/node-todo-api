var mongoose = require('mongoose');

var User = mongoose.model('user', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim : true
    },
});

module.exports = {User};

// var user1 = new User({
//     email: ' people@gmail.com  '
// });

// user1.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//     console.log('Unable to save');
// });