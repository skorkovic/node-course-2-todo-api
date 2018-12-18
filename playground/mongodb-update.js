//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

//var user = {name: 'andrew', age: 25};
//var {name} = user;
//console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
         return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectID('5c1905514d0c81726d12b621')
//    }, {
//        $set: {
//            completed: true
//        }
//    }, {
//        returnOriginal: false
//    }).then((results) => {
//        console.log(results);
//    });
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c18f2e29ea48b16a92d312e')
    }, {
        $set: {
            name: 'Andrew'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((results) => {
        console.log(results);
    });

    //db.close();
});