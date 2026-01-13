
    const fs = require('fs');
    const path = require('path');
    const data = require('./Spain.json');
    function Spain_Express(Router){
        Router.get('/Spain', (req, res) => {
            res.sendFile(path.join(__dirname, "Spain.html"))
        })
        Router.get('/Spain.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Spain.js"))
        })
        Router.get('/Spain.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Spain.css"))
        })
    }
    module.exports = Spain_Express;
    