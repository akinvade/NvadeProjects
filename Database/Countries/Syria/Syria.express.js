
    const fs = require('fs');
    const path = require('path');
    const data = require('./Syria.json');
    function Syria_Express(Router){
        Router.get('/Syria', (req, res) => {
            res.sendFile(path.join(__dirname, "Syria.html"))
        })
        Router.get('/Syria.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Syria.js"))
        })
        Router.get('/Syria.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Syria.css"))
        })
    }
    module.exports = Syria_Express;
    