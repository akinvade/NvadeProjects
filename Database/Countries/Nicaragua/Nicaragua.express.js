
    const fs = require('fs');
    const path = require('path');
    const data = require('./Nicaragua.json');
    function Nicaragua_Express(Router){
        Router.get('/Nicaragua', (req, res) => {
            res.sendFile(path.join(__dirname, "Nicaragua.html"))
        })
        Router.get('/Nicaragua.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Nicaragua.js"))
        })
        Router.get('/Nicaragua.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Nicaragua.css"))
        })
    }
    module.exports = Nicaragua_Express;
    