
    const fs = require('fs');
    const path = require('path');
    const data = require('./Comoros.json');
    function Comoros_Express(Router){
        Router.get('/Comoros', (req, res) => {
            res.sendFile(path.join(__dirname, "Comoros.html"))
        })
        Router.get('/Comoros.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Comoros.js"))
        })
        Router.get('/Comoros.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Comoros.css"))
        })
    }
    module.exports = Comoros_Express;
    