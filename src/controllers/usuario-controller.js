module.exports = app =>{

app.get('/usuarios', (req, res) => {
    res.send(`usuarios :  olá mundo`)
  })

}