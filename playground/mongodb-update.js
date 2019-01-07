const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
       return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id : new ObjectID('5c33248f7de4c73d5ac2f56a')
    // }, {
    //     $set : {
    //         completed: true,
    //     }
    // }, {
    //     returnOriginal : false
    // }).then((res)=>{
    //     console.log(res);
    // });

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID('5c32fab5f217ff1f64183cbd')
    }, {
        $set : {
            name: 'Changed update'
        },
        $inc : {
            age : 1
        }
    }, {
        returnOriginal : false
    }).then((res)=>{
        console.log(res);
    });

    //db.close();
});