
    const fs = require('fs');
    const path = require('path');
    const data = require('./Romania.json');
    function Romania_Express(Router){
        Router.get('/Romania', (req, res) => {
            res.sendFile(path.join(__dirname, "Romania.html"))
        })
        Router.get('/Romania.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Romania.js"))
        })
        Router.get('/Romania.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Romania.css"))
        })
    }
    module.exports = Romania_Express;
    