
    const fs = require('fs');
    const path = require('path');
    const data = require('./Madagascar.json');
    function Madagascar_Express(Router){
        Router.get('/Madagascar', (req, res) => {
            res.sendFile(path.join(__dirname, "Madagascar.html"))
        })
        Router.get('/Madagascar.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Madagascar.js"))
        })
        Router.get('/Madagascar.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Madagascar.css"))
        })
    }
    module.exports = Madagascar_Express;
    