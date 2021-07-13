const express = require('express')
const app = express()
const port = 3020
const usuarios = require('./controllers/usuario-controller');
const tarefas = require('./controllers/tarefa-controller');
const bodyParser = require('body-parser');


const User = require('./models/userModel')
const Task = require('./models/task')
const db = require('./infra/bd')


app.use(bodyParser.json());
usuarios(app, User, db);
tarefas(app, Task , db);



app.listen(port, () => console.log( `localhost:3020`))


