
    const fs = require('fs');
    const path = require('path');
    const data = require('./Slovakia.json');
    function Slovakia_Express(Router){
        Router.get('/Slovakia', (req, res) => {
            res.sendFile(path.join(__dirname, "Slovakia.html"))
        })
        Router.get('/Slovakia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Slovakia.js"))
        })
        Router.get('/Slovakia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Slovakia.css"))
        })
    }
    module.exports = Slovakia_Express;
    