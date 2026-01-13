
    const fs = require('fs');
    const path = require('path');
    const data = require('./Central_African_Republic.json');
    function Central_African_Republic_Express(Router){
        Router.get('/Central_African_Republic', (req, res) => {
            res.sendFile(path.join(__dirname, "Central_African_Republic.html"))
        })
        Router.get('/Central_African_Republic.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Central_African_Republic.js"))
        })
        Router.get('/Central_African_Republic.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Central_African_Republic.css"))
        })
    }
    module.exports = Central_African_Republic_Express;
    