
    const fs = require('fs');
    const path = require('path');
    const data = require('./Bonaire.json');
    function Bonaire_Express(Router){
        Router.get('/Bonaire', (req, res) => {
            res.sendFile(path.join(__dirname, "Bonaire.html"))
        })
        Router.get('/Bonaire.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Bonaire.js"))
        })
        Router.get('/Bonaire.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Bonaire.css"))
        })
    }
    module.exports = Bonaire_Express;
    