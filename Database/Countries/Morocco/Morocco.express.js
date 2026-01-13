
    const fs = require('fs');
    const path = require('path');
    const data = require('./Morocco.json');
    function Morocco_Express(Router){
        Router.get('/Morocco', (req, res) => {
            res.sendFile(path.join(__dirname, "Morocco.html"))
        })
        Router.get('/Morocco.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Morocco.js"))
        })
        Router.get('/Morocco.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Morocco.css"))
        })
    }
    module.exports = Morocco_Express;
    