
    const fs = require('fs');
    const path = require('path');
    const data = require('./Guyana.json');
    function Guyana_Express(Router){
        Router.get('/Guyana', (req, res) => {
            res.sendFile(path.join(__dirname, "Guyana.html"))
        })
        Router.get('/Guyana.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Guyana.js"))
        })
        Router.get('/Guyana.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Guyana.css"))
        })
    }
    module.exports = Guyana_Express;
    