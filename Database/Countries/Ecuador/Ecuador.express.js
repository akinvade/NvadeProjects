
    const fs = require('fs');
    const path = require('path');
    const data = require('./Ecuador.json');
    function Ecuador_Express(Router){
        Router.get('/Ecuador', (req, res) => {
            res.sendFile(path.join(__dirname, "Ecuador.html"))
        })
        Router.get('/Ecuador.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Ecuador.js"))
        })
        Router.get('/Ecuador.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Ecuador.css"))
        })
    }
    module.exports = Ecuador_Express;
    