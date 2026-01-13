
    const fs = require('fs');
    const path = require('path');
    const data = require('./Tunisia.json');
    function Tunisia_Express(Router){
        Router.get('/Tunisia', (req, res) => {
            res.sendFile(path.join(__dirname, "Tunisia.html"))
        })
        Router.get('/Tunisia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Tunisia.js"))
        })
        Router.get('/Tunisia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Tunisia.css"))
        })
    }
    module.exports = Tunisia_Express;
    