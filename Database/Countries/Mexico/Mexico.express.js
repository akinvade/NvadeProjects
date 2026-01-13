
    const fs = require('fs');
    const path = require('path');
    const data = require('./Mexico.json');
    function Mexico_Express(Router){
        Router.get('/Mexico', (req, res) => {
            res.sendFile(path.join(__dirname, "Mexico.html"))
        })
        Router.get('/Mexico.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Mexico.js"))
        })
        Router.get('/Mexico.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Mexico.css"))
        })
    }
    module.exports = Mexico_Express;
    