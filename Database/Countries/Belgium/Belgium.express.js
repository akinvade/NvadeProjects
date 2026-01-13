
    const fs = require('fs');
    const path = require('path');
    const data = require('./Belgium.json');
    function Belgium_Express(Router){
        Router.get('/Belgium', (req, res) => {
            res.sendFile(path.join(__dirname, "Belgium.html"))
        })
        Router.get('/Belgium.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Belgium.js"))
        })
        Router.get('/Belgium.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Belgium.css"))
        })
    }
    module.exports = Belgium_Express;
    