
    const fs = require('fs');
    const path = require('path');
    const data = require('./Gibraltar.json');
    function Gibraltar_Express(Router){
        Router.get('/Gibraltar', (req, res) => {
            res.sendFile(path.join(__dirname, "Gibraltar.html"))
        })
        Router.get('/Gibraltar.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Gibraltar.js"))
        })
        Router.get('/Gibraltar.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Gibraltar.css"))
        })
    }
    module.exports = Gibraltar_Express;
    