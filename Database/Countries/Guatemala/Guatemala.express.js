
    const fs = require('fs');
    const path = require('path');
    const data = require('./Guatemala.json');
    function Guatemala_Express(Router){
        Router.get('/Guatemala', (req, res) => {
            res.sendFile(path.join(__dirname, "Guatemala.html"))
        })
        Router.get('/Guatemala.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Guatemala.js"))
        })
        Router.get('/Guatemala.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Guatemala.css"))
        })
    }
    module.exports = Guatemala_Express;
    