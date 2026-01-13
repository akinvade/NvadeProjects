
    const fs = require('fs');
    const path = require('path');
    const data = require('./Haiti.json');
    function Haiti_Express(Router){
        Router.get('/Haiti', (req, res) => {
            res.sendFile(path.join(__dirname, "Haiti.html"))
        })
        Router.get('/Haiti.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Haiti.js"))
        })
        Router.get('/Haiti.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Haiti.css"))
        })
    }
    module.exports = Haiti_Express;
    