
    const fs = require('fs');
    const path = require('path');
    const data = require('./Russia.json');
    function Russia_Express(Router){
        Router.get('/Russia', (req, res) => {
            res.sendFile(path.join(__dirname, "Russia.html"))
        })
        Router.get('/Russia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Russia.js"))
        })
        Router.get('/Russia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Russia.css"))
        })
    }
    module.exports = Russia_Express;
    