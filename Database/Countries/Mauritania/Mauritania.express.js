
    const fs = require('fs');
    const path = require('path');
    const data = require('./Mauritania.json');
    function Mauritania_Express(Router){
        Router.get('/Mauritania', (req, res) => {
            res.sendFile(path.join(__dirname, "Mauritania.html"))
        })
        Router.get('/Mauritania.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Mauritania.js"))
        })
        Router.get('/Mauritania.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Mauritania.css"))
        })
    }
    module.exports = Mauritania_Express;
    