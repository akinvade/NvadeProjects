
    const fs = require('fs');
    const path = require('path');
    const data = require('./Kiribati.json');
    function Kiribati_Express(Router){
        Router.get('/Kiribati', (req, res) => {
            res.sendFile(path.join(__dirname, "Kiribati.html"))
        })
        Router.get('/Kiribati.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Kiribati.js"))
        })
        Router.get('/Kiribati.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Kiribati.css"))
        })
    }
    module.exports = Kiribati_Express;
    