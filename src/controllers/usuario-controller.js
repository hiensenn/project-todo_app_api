

module.exports = (app, User , db)  =>{

app.get('/usuarios', (req, res) => {
    res.send(`rota ativa`)

  })
  app.post('/usuarios', (req, res) => {
    
    const usuario = new User(req.body.nome, req.body.email, req.body.senha);
    db.user.push(usuario);
    res.send(`Usuario criado com sucesso!`);
    console.log(req.body);

  })
}

