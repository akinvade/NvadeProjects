
    const fs = require('fs');
    const path = require('path');
    const data = require('./Namibia.json');
    function Namibia_Express(Router){
        Router.get('/Namibia', (req, res) => {
            res.sendFile(path.join(__dirname, "Namibia.html"))
        })
        Router.get('/Namibia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Namibia.js"))
        })
        Router.get('/Namibia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Namibia.css"))
        })
    }
    module.exports = Namibia_Express;
    