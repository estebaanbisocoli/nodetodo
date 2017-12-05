const request = require('supertest');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');

beforeEach((done) => {
    Todo.remove({}).then(() => done());
});
describe('POST /todos', () => {
            test('deberia crear una nueva todo', (done) => {
                var text = 'Text todo';
                request(app)
                    .post('/todos')
                    .send({ text })
                    .expect(200)
                    .expect((req) => {
                        expect(req.body.text).toBe(text);
                    })
                    .end((err, res) => {

                        if (err) {
                            return done(err);
                        }

                        Todo.find().then((todos) => {

                            expect(todos.length).toBe(1);
                            expect(todos[0].text).toBe(text);
                            return done();

                        }).catch(e => {
                            done(e);
                        });
                    });
            });

            test('No deberia crear todo con datos invalidos', (done) => {
                    request(app)
                        .post('/todos')
                        .send({})
                        .expect(400)
                        .end((err, res) => {
                                if (err) {
                                    return done(err);
                                }

                                Todo.find({).then((todos) => {
                                        expect(todos.length).toBe(0);
                                        return done();
                                    }).catch(e =>
                                        done(e)
                                    );
                                });
                        });
            });