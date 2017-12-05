var express = require('express');
var bodyParser = require('body-parser');


var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');


var app = express();
// app.use((req, res , next) {

// });
app.get('/', (req, res) => {
    res.send()
});
app.use(bodyParser.json());

app.post('/todos', (req, res) => {

    if (req.body.text) {
        var todo = new Todo({
            text: req.body.text
        });
        todo.save().then(doc => {
            res.send(doc);
        }).catch(e => {
            res.status(400).send(e);
        })
    } else {
        console.log('infi¡o incorrecta');
        console.log(JSON.stringify(req.data, undefined, 2));
    }

});

app.get('/todos', (req, res) => {
    console.log('requesting data')
    Todo.find().then((todos) => {
        res.send({ todos })
    }).catch(e => {
        res.status(400).send(e);
    });
});




app.listen(3000, () => {
    console.log('Started in port 3000');
});

module.exports = { app };