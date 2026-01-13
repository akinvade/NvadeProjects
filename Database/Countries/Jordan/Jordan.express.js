
    const fs = require('fs');
    const path = require('path');
    const data = require('./Jordan.json');
    function Jordan_Express(Router){
        Router.get('/Jordan', (req, res) => {
            res.sendFile(path.join(__dirname, "Jordan.html"))
        })
        Router.get('/Jordan.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Jordan.js"))
        })
        Router.get('/Jordan.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Jordan.css"))
        })
    }
    module.exports = Jordan_Express;
    