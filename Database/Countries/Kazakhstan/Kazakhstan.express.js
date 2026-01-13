
    const fs = require('fs');
    const path = require('path');
    const data = require('./Kazakhstan.json');
    function Kazakhstan_Express(Router){
        Router.get('/Kazakhstan', (req, res) => {
            res.sendFile(path.join(__dirname, "Kazakhstan.html"))
        })
        Router.get('/Kazakhstan.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Kazakhstan.js"))
        })
        Router.get('/Kazakhstan.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Kazakhstan.css"))
        })
    }
    module.exports = Kazakhstan_Express;
    