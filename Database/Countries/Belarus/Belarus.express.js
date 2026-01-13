
    const fs = require('fs');
    const path = require('path');
    const data = require('./Belarus.json');
    function Belarus_Express(Router){
        Router.get('/Belarus', (req, res) => {
            res.sendFile(path.join(__dirname, "Belarus.html"))
        })
        Router.get('/Belarus.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Belarus.js"))
        })
        Router.get('/Belarus.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Belarus.css"))
        })
    }
    module.exports = Belarus_Express;
    