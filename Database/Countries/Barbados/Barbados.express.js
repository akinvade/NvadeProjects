
    const fs = require('fs');
    const path = require('path');
    const data = require('./Barbados.json');
    function Barbados_Express(Router){
        Router.get('/Barbados', (req, res) => {
            res.sendFile(path.join(__dirname, "Barbados.html"))
        })
        Router.get('/Barbados.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Barbados.js"))
        })
        Router.get('/Barbados.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Barbados.css"))
        })
    }
    module.exports = Barbados_Express;
    