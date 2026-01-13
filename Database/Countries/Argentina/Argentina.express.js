
    const fs = require('fs');
    const path = require('path');
    const data = require('./Argentina.json');
    function Argentina_Express(Router){
        Router.get('/Argentina', (req, res) => {
            res.sendFile(path.join(__dirname, "Argentina.html"))
        })
        Router.get('/Argentina.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Argentina.js"))
        })
        Router.get('/Argentina.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Argentina.css"))
        })
    }
    module.exports = Argentina_Express;
    