
    const fs = require('fs');
    const path = require('path');
    const data = require('./Maldives.json');
    function Maldives_Express(Router){
        Router.get('/Maldives', (req, res) => {
            res.sendFile(path.join(__dirname, "Maldives.html"))
        })
        Router.get('/Maldives.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Maldives.js"))
        })
        Router.get('/Maldives.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Maldives.css"))
        })
    }
    module.exports = Maldives_Express;
    