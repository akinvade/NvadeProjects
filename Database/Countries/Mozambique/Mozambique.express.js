
    const fs = require('fs');
    const path = require('path');
    const data = require('./Mozambique.json');
    function Mozambique_Express(Router){
        Router.get('/Mozambique', (req, res) => {
            res.sendFile(path.join(__dirname, "Mozambique.html"))
        })
        Router.get('/Mozambique.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Mozambique.js"))
        })
        Router.get('/Mozambique.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Mozambique.css"))
        })
    }
    module.exports = Mozambique_Express;
    