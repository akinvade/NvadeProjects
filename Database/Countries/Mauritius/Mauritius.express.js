
    const fs = require('fs');
    const path = require('path');
    const data = require('./Mauritius.json');
    function Mauritius_Express(Router){
        Router.get('/Mauritius', (req, res) => {
            res.sendFile(path.join(__dirname, "Mauritius.html"))
        })
        Router.get('/Mauritius.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Mauritius.js"))
        })
        Router.get('/Mauritius.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Mauritius.css"))
        })
    }
    module.exports = Mauritius_Express;
    