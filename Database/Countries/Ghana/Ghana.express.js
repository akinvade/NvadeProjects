
    const fs = require('fs');
    const path = require('path');
    const data = require('./Ghana.json');
    function Ghana_Express(Router){
        Router.get('/Ghana', (req, res) => {
            res.sendFile(path.join(__dirname, "Ghana.html"))
        })
        Router.get('/Ghana.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Ghana.js"))
        })
        Router.get('/Ghana.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Ghana.css"))
        })
    }
    module.exports = Ghana_Express;
    