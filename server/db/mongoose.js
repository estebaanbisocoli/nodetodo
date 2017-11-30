var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {
    useMongoClient: true
}).then(res => {
    console.log('conectted to database');
}).catch(e => {
    console.log('couldn\'t connect to server');
});

module.exports = { mongoose };