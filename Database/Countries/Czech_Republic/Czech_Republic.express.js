
    const fs = require('fs');
    const path = require('path');
    const data = require('./Czech_Republic.json');
    function Czech_Republic_Express(Router){
        Router.get('/Czech_Republic', (req, res) => {
            res.sendFile(path.join(__dirname, "Czech_Republic.html"))
        })
        Router.get('/Czech_Republic.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Czech_Republic.js"))
        })
        Router.get('/Czech_Republic.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Czech_Republic.css"))
        })
    }
    module.exports = Czech_Republic_Express;
    