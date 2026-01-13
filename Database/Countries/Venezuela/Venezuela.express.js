
    const fs = require('fs');
    const path = require('path');
    const data = require('./Venezuela.json');
    function Venezuela_Express(Router){
        Router.get('/Venezuela', (req, res) => {
            res.sendFile(path.join(__dirname, "Venezuela.html"))
        })
        Router.get('/Venezuela.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Venezuela.js"))
        })
        Router.get('/Venezuela.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Venezuela.css"))
        })
    }
    module.exports = Venezuela_Express;
    