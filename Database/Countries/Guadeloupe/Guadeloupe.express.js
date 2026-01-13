
    const fs = require('fs');
    const path = require('path');
    const data = require('./Guadeloupe.json');
    function Guadeloupe_Express(Router){
        Router.get('/Guadeloupe', (req, res) => {
            res.sendFile(path.join(__dirname, "Guadeloupe.html"))
        })
        Router.get('/Guadeloupe.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Guadeloupe.js"))
        })
        Router.get('/Guadeloupe.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Guadeloupe.css"))
        })
    }
    module.exports = Guadeloupe_Express;
    