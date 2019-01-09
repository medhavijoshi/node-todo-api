const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ =require('lodash');

var userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token : {
            type: String,
            required: true
        }
    }]
});

userSchema.methods.toJSON = function () {
    var user = this;
    // toObject takes your mongoose variable user and converts it to regular object
    var userObject = user.toObject();
    return _.pick(userObject, ['_id', 'email']);

};

//userSchema.methods is an object which you can call instance methods on
//we do not use arrow function here because they do not bind 'this' keyword
userSchema.methods.generalAuthToken = function(){
    var user = this;
    var access ='auth';
    //on the server file, we grab this token by tracking on another then callback, 
    //getting aaccess to the token and then responding inside the callback function
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

    user.tokens = user.tokens.concat([{access, token}]);
    // user.save() returns a promise which is why we can call then 
    // to return a success callback
    return user.save().then(()=>{
        //usually when you return to chain in a promise, you return a promise
        // here we return a value that gets passed as the success argument for the next call
        return token;
    });
};

var User = mongoose.model('User', userSchema);

module.exports = {User};

// var user1 = new User({
//     email: ' people@gmail.com  '
// });

// user1.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//     console.log('Unable to save');
// });