const user = require('./userModel')
const task = require('./task')

const testeUser = new user('João', 'hiensen@gagag.com', '123321');
const testeTask = new task('aluno', 'novoAluno', 'ativo', '2021');

console.log(testeTask, testeUser);