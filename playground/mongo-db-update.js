const {
    MongoClient,
    ObjectId
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp').then((db) => {
    let id = new ObjectId("5a1cda8ab0536c2c90c8ba4c");
    let myCollection = db.collection('Users');
    myCollection.findOneAndUpdate({
        _id: id
    }, {

        $set: {
            name: 'esteban'
        },
        $inc: {
            age: 1
        }

    }, {
        returnOriginal: false
    }).then(res => {

        if (res.value === null) {
            throw new Error('No se encontro archivo');
        };
        console.log(res.value);

    }).catch(e => {
        console.log('algun error tratando de modificar', e);
    });


}).catch(e => {
    console.log('No se puede conectar al server');
});