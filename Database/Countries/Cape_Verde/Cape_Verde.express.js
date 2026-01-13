
    const fs = require('fs');
    const path = require('path');
    const data = require('./Cape_Verde.json');
    function Cape_Verde_Express(Router){
        Router.get('/Cape_Verde', (req, res) => {
            res.sendFile(path.join(__dirname, "Cape_Verde.html"))
        })
        Router.get('/Cape_Verde.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Cape_Verde.js"))
        })
        Router.get('/Cape_Verde.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Cape_Verde.css"))
        })
    }
    module.exports = Cape_Verde_Express;
    