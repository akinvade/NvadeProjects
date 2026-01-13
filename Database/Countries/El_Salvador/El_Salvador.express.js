
    const fs = require('fs');
    const path = require('path');
    const data = require('./El_Salvador.json');
    function El_Salvador_Express(Router){
        Router.get('/El_Salvador', (req, res) => {
            res.sendFile(path.join(__dirname, "El_Salvador.html"))
        })
        Router.get('/El_Salvador.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "El_Salvador.js"))
        })
        Router.get('/El_Salvador.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "El_Salvador.css"))
        })
    }
    module.exports = El_Salvador_Express;
    