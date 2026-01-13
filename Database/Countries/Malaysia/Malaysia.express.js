
    const fs = require('fs');
    const path = require('path');
    const data = require('./Malaysia.json');
    function Malaysia_Express(Router){
        Router.get('/Malaysia', (req, res) => {
            res.sendFile(path.join(__dirname, "Malaysia.html"))
        })
        Router.get('/Malaysia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Malaysia.js"))
        })
        Router.get('/Malaysia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Malaysia.css"))
        })
    }
    module.exports = Malaysia_Express;
    