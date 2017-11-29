const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp').then((db) => {
    let myCollection = db.collection('Todos');
    // myCollection.deleteMany({
    //     text: 'Eat lunch'
    // }).then((results) => {
    //     console.log(results.result);
    // }).catch(e => {
    //     console.log('no se pudo eliminar');
    // });

    // myCollection.deleteOne({
    //     text: 'something to do'
    // }).then(res => {
    //     console.log(res.result);
    // }).catch(e => {
    //     console.log('No se puede eliminar elemento');
    // });

    // myCollection.findOneAndDelete({ completed: true }).then((res) => {
    //     console.log(res);
    // }).catch(e => {
    //     console.log('no se pudo encontrar o eliminar');
    // });

    //db.close()
}).catch(e => {
    console.log('No se puede conectar al server');
});