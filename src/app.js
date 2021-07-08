const express = require('express')
const app = express()
const port = 3020
const usuarios = require('./controllers/usuario-controller');
const tarefas = require('./controllers/tarefa-controller');



usuarios(app);
tarefas(app);



app.listen(port, () => console.log( `localhost:3020`))


