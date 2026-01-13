
    const fs = require('fs');
    const path = require('path');
    const data = require('./Sri_Lanka.json');
    function Sri_Lanka_Express(Router){
        Router.get('/Sri_Lanka', (req, res) => {
            res.sendFile(path.join(__dirname, "Sri_Lanka.html"))
        })
        Router.get('/Sri_Lanka.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Sri_Lanka.js"))
        })
        Router.get('/Sri_Lanka.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Sri_Lanka.css"))
        })
    }
    module.exports = Sri_Lanka_Express;
    