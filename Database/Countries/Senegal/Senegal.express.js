
    const fs = require('fs');
    const path = require('path');
    const data = require('./Senegal.json');
    function Senegal_Express(Router){
        Router.get('/Senegal', (req, res) => {
            res.sendFile(path.join(__dirname, "Senegal.html"))
        })
        Router.get('/Senegal.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Senegal.js"))
        })
        Router.get('/Senegal.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Senegal.css"))
        })
    }
    module.exports = Senegal_Express;
    