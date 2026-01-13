
    const fs = require('fs');
    const path = require('path');
    const data = require('./Chile.json');
    function Chile_Express(Router){
        Router.get('/Chile', (req, res) => {
            res.sendFile(path.join(__dirname, "Chile.html"))
        })
        Router.get('/Chile.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Chile.js"))
        })
        Router.get('/Chile.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Chile.css"))
        })
    }
    module.exports = Chile_Express;
    