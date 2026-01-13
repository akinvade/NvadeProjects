
    const fs = require('fs');
    const path = require('path');
    const data = require('./Gabon.json');
    function Gabon_Express(Router){
        Router.get('/Gabon', (req, res) => {
            res.sendFile(path.join(__dirname, "Gabon.html"))
        })
        Router.get('/Gabon.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Gabon.js"))
        })
        Router.get('/Gabon.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Gabon.css"))
        })
    }
    module.exports = Gabon_Express;
    