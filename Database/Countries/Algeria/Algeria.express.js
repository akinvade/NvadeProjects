
    const fs = require('fs');
    const path = require('path');
    const data = require('./Algeria.json');
    function Algeria_Express(Router){
        Router.get('/Algeria', (req, res) => {
            res.sendFile(path.join(__dirname, "Algeria.html"))
        })
        Router.get('/Algeria.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Algeria.js"))
        })
        Router.get('/Algeria.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Algeria.css"))
        })
    }
    module.exports = Algeria_Express;
    