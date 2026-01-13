
    const fs = require('fs');
    const path = require('path');
    const data = require('./Grenada.json');
    function Grenada_Express(Router){
        Router.get('/Grenada', (req, res) => {
            res.sendFile(path.join(__dirname, "Grenada.html"))
        })
        Router.get('/Grenada.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Grenada.js"))
        })
        Router.get('/Grenada.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Grenada.css"))
        })
    }
    module.exports = Grenada_Express;
    