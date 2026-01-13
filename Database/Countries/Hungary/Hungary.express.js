
    const fs = require('fs');
    const path = require('path');
    const data = require('./Hungary.json');
    function Hungary_Express(Router){
        Router.get('/Hungary', (req, res) => {
            res.sendFile(path.join(__dirname, "Hungary.html"))
        })
        Router.get('/Hungary.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Hungary.js"))
        })
        Router.get('/Hungary.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Hungary.css"))
        })
    }
    module.exports = Hungary_Express;
    