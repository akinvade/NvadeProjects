
    const fs = require('fs');
    const path = require('path');
    const data = require('./Italy.json');
    function Italy_Express(Router){
        Router.get('/Italy', (req, res) => {
            res.sendFile(path.join(__dirname, "Italy.html"))
        })
        Router.get('/Italy.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Italy.js"))
        })
        Router.get('/Italy.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Italy.css"))
        })
    }
    module.exports = Italy_Express;
    