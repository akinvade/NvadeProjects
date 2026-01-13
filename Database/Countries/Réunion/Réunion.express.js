
    const fs = require('fs');
    const path = require('path');
    const data = require('./Réunion.json');
    function Réunion_Express(Router){
        Router.get('/Réunion', (req, res) => {
            res.sendFile(path.join(__dirname, "Réunion.html"))
        })
        Router.get('/Réunion.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Réunion.js"))
        })
        Router.get('/Réunion.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Réunion.css"))
        })
    }
    module.exports = Réunion_Express;
    