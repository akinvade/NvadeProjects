
    const fs = require('fs');
    const path = require('path');
    const data = require('./Bouvet_Island.json');
    function Bouvet_Island_Express(Router){
        Router.get('/Bouvet_Island', (req, res) => {
            res.sendFile(path.join(__dirname, "Bouvet_Island.html"))
        })
        Router.get('/Bouvet_Island.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Bouvet_Island.js"))
        })
        Router.get('/Bouvet_Island.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Bouvet_Island.css"))
        })
    }
    module.exports = Bouvet_Island_Express;
    