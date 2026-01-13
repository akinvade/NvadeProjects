
    const fs = require('fs');
    const path = require('path');
    const data = require('./Zambia.json');
    function Zambia_Express(Router){
        Router.get('/Zambia', (req, res) => {
            res.sendFile(path.join(__dirname, "Zambia.html"))
        })
        Router.get('/Zambia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Zambia.js"))
        })
        Router.get('/Zambia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Zambia.css"))
        })
    }
    module.exports = Zambia_Express;
    