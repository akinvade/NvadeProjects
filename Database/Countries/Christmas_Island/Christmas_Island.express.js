
    const fs = require('fs');
    const path = require('path');
    const data = require('./Christmas_Island.json');
    function Christmas_Island_Express(Router){
        Router.get('/Christmas_Island', (req, res) => {
            res.sendFile(path.join(__dirname, "Christmas_Island.html"))
        })
        Router.get('/Christmas_Island.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Christmas_Island.js"))
        })
        Router.get('/Christmas_Island.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Christmas_Island.css"))
        })
    }
    module.exports = Christmas_Island_Express;
    