
    const fs = require('fs');
    const path = require('path');
    const data = require('./Seychelles.json');
    function Seychelles_Express(Router){
        Router.get('/Seychelles', (req, res) => {
            res.sendFile(path.join(__dirname, "Seychelles.html"))
        })
        Router.get('/Seychelles.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Seychelles.js"))
        })
        Router.get('/Seychelles.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Seychelles.css"))
        })
    }
    module.exports = Seychelles_Express;
    