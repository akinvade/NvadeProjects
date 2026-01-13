
    const fs = require('fs');
    const path = require('path');
    const data = require('./Guinea.json');
    function Guinea_Express(Router){
        Router.get('/Guinea', (req, res) => {
            res.sendFile(path.join(__dirname, "Guinea.html"))
        })
        Router.get('/Guinea.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Guinea.js"))
        })
        Router.get('/Guinea.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Guinea.css"))
        })
    }
    module.exports = Guinea_Express;
    