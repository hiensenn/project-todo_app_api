function rotasPrincipais(app){
    app.get('/', (req, res) =>{
        res.send('Ola mundo')
    })
}

module.exports = rotasPrincipais;