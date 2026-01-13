
    const fs = require('fs');
    const path = require('path');
    const data = require('./Dominican_Republic.json');
    function Dominican_Republic_Express(Router){
        Router.get('/Dominican_Republic', (req, res) => {
            res.sendFile(path.join(__dirname, "Dominican_Republic.html"))
        })
        Router.get('/Dominican_Republic.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Dominican_Republic.js"))
        })
        Router.get('/Dominican_Republic.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Dominican_Republic.css"))
        })
    }
    module.exports = Dominican_Republic_Express;
    