const Task = require("../models/task")
const db = require("../infra/bd")

module.exports = app=> {
  
app.get('/tarefas', (req, res) => {
    res.send(`olá mundo`)
  })
  app.post('/tarefas', (req, res) => {
    const task = new Task(req.body.titulo, req.body.descricao, req.body.status, req.body.datadecriacao)
    db.task.push(task)
    res.send(`tarefa feita`)
    console.log(req.body)
  })
}