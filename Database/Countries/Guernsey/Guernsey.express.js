
    const fs = require('fs');
    const path = require('path');
    const data = require('./Guernsey.json');
    function Guernsey_Express(Router){
        Router.get('/Guernsey', (req, res) => {
            res.sendFile(path.join(__dirname, "Guernsey.html"))
        })
        Router.get('/Guernsey.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Guernsey.js"))
        })
        Router.get('/Guernsey.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Guernsey.css"))
        })
    }
    module.exports = Guernsey_Express;
    