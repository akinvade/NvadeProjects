
    const fs = require('fs');
    const path = require('path');
    const data = require('./Vanuatu.json');
    function Vanuatu_Express(Router){
        Router.get('/Vanuatu', (req, res) => {
            res.sendFile(path.join(__dirname, "Vanuatu.html"))
        })
        Router.get('/Vanuatu.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Vanuatu.js"))
        })
        Router.get('/Vanuatu.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Vanuatu.css"))
        })
    }
    module.exports = Vanuatu_Express;
    