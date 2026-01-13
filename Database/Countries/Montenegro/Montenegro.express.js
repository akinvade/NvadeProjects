
    const fs = require('fs');
    const path = require('path');
    const data = require('./Montenegro.json');
    function Montenegro_Express(Router){
        Router.get('/Montenegro', (req, res) => {
            res.sendFile(path.join(__dirname, "Montenegro.html"))
        })
        Router.get('/Montenegro.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Montenegro.js"))
        })
        Router.get('/Montenegro.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Montenegro.css"))
        })
    }
    module.exports = Montenegro_Express;
    