
    const fs = require('fs');
    const path = require('path');
    const data = require('./Sudan.json');
    function Sudan_Express(Router){
        Router.get('/Sudan', (req, res) => {
            res.sendFile(path.join(__dirname, "Sudan.html"))
        })
        Router.get('/Sudan.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Sudan.js"))
        })
        Router.get('/Sudan.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Sudan.css"))
        })
    }
    module.exports = Sudan_Express;
    