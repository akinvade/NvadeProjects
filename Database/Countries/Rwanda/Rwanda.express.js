
    const fs = require('fs');
    const path = require('path');
    const data = require('./Rwanda.json');
    function Rwanda_Express(Router){
        Router.get('/Rwanda', (req, res) => {
            res.sendFile(path.join(__dirname, "Rwanda.html"))
        })
        Router.get('/Rwanda.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Rwanda.js"))
        })
        Router.get('/Rwanda.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Rwanda.css"))
        })
    }
    module.exports = Rwanda_Express;
    