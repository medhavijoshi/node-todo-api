// var MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

var user = {name: 'andrew', age:35};
var {name} = user;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
       return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c32f9771405141f2e80a07b')
    // }).toArray().then((docs)=> {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) =>{
    //     console.log('Unable to fetch todos.', err);
    // });

    db.collection('Users').find({name: 'Medhavi Joshi'}).count().then((count)=> {
        console.log(`Todos count: ${count}`);
    }, (err) =>{
        console.log('Unable to fetch todos.', err);
    });

    // client.close();
});