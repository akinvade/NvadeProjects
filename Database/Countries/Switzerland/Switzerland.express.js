
    const fs = require('fs');
    const path = require('path');
    const data = require('./Switzerland.json');
    function Switzerland_Express(Router){
        Router.get('/Switzerland', (req, res) => {
            res.sendFile(path.join(__dirname, "Switzerland.html"))
        })
        Router.get('/Switzerland.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Switzerland.js"))
        })
        Router.get('/Switzerland.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Switzerland.css"))
        })
    }
    module.exports = Switzerland_Express;
    