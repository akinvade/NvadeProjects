
    const fs = require('fs');
    const path = require('path');
    const data = require('./Martinique.json');
    function Martinique_Express(Router){
        Router.get('/Martinique', (req, res) => {
            res.sendFile(path.join(__dirname, "Martinique.html"))
        })
        Router.get('/Martinique.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Martinique.js"))
        })
        Router.get('/Martinique.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Martinique.css"))
        })
    }
    module.exports = Martinique_Express;
    