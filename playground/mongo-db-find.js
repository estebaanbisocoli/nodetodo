// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp').then((db) => {

    // db.collection('Todos').find({
    // 	completed: 0
    // }).toArray().then((docs) => {
    // 	console.log('Todos');
    // 	if (docs.length === 0) {
    // 		throw new Error('no se encontro')
    // 	};
    // 	console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    // 	throw new error('cannot parse');
    // }).catch(e => {
    // 	console.log(e);
    // 	db.close();
    // });
    // // db.close();

    // 	db.collection('Todos').find({

    // }).count().then((count) => {
    // 	console.log('Todos');
    // 	console.log(`count: ${count}`)
    // }, (err) => {
    // 	throw new error('cannot parse');
    // }).catch(e => {
    // 	console.log(e);
    // 	db.close();
    // });
    // // db.close();
    db.collection('Users').find({
        name: 'esteban'
    }).toArray().then(results => {
        console.log(results);
    }, e => {
        throw new Error('cannot parse');
    }).catch(e => { console.log(e) });



}, (err) => {
    throw new Error('cant connect')
}).catch(e => {
    console.log(e);
});