
    const fs = require('fs');
    const path = require('path');
    const data = require('./Bolivia.json');
    function Bolivia_Express(Router){
        Router.get('/Bolivia', (req, res) => {
            res.sendFile(path.join(__dirname, "Bolivia.html"))
        })
        Router.get('/Bolivia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Bolivia.js"))
        })
        Router.get('/Bolivia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Bolivia.css"))
        })
    }
    module.exports = Bolivia_Express;
    