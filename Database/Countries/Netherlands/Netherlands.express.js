
    const fs = require('fs');
    const path = require('path');
    const data = require('./Netherlands.json');
    function Netherlands_Express(Router){
        Router.get('/Netherlands', (req, res) => {
            res.sendFile(path.join(__dirname, "Netherlands.html"))
        })
        Router.get('/Netherlands.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Netherlands.js"))
        })
        Router.get('/Netherlands.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Netherlands.css"))
        })
    }
    module.exports = Netherlands_Express;
    