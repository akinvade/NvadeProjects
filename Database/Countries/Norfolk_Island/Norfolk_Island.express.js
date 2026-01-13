
    const fs = require('fs');
    const path = require('path');
    const data = require('./Norfolk_Island.json');
    function Norfolk_Island_Express(Router){
        Router.get('/Norfolk_Island', (req, res) => {
            res.sendFile(path.join(__dirname, "Norfolk_Island.html"))
        })
        Router.get('/Norfolk_Island.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Norfolk_Island.js"))
        })
        Router.get('/Norfolk_Island.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Norfolk_Island.css"))
        })
    }
    module.exports = Norfolk_Island_Express;
    