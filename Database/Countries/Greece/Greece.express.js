
    const fs = require('fs');
    const path = require('path');
    const data = require('./Greece.json');
    function Greece_Express(Router){
        Router.get('/Greece', (req, res) => {
            res.sendFile(path.join(__dirname, "Greece.html"))
        })
        Router.get('/Greece.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Greece.js"))
        })
        Router.get('/Greece.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Greece.css"))
        })
    }
    module.exports = Greece_Express;
    