// const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id:10
}

// takes the object, data with the user id, and signs it
// creates a hash and returns the token value
var token = jwt.sign(data, '123abc');
console.log(token);

// takes the token and the secret and makes sure that the data was not manipulated
var tokenDecoded = jwt.verify(token, '123abc');
console.log(tokenDecoded);






// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4,  
// };

// //what we return to the user
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// //if the user tries to change it 
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resulthash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resulthash == token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Do not trust: Data was changed');
// }