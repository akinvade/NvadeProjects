
    const fs = require('fs');
    const path = require('path');
    const data = require('./Singapore.json');
    function Singapore_Express(Router){
        Router.get('/Singapore', (req, res) => {
            res.sendFile(path.join(__dirname, "Singapore.html"))
        })
        Router.get('/Singapore.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Singapore.js"))
        })
        Router.get('/Singapore.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Singapore.css"))
        })
    }
    module.exports = Singapore_Express;
    