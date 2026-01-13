
    const fs = require('fs');
    const path = require('path');
    const data = require('./Nepal.json');
    function Nepal_Express(Router){
        Router.get('/Nepal', (req, res) => {
            res.sendFile(path.join(__dirname, "Nepal.html"))
        })
        Router.get('/Nepal.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Nepal.js"))
        })
        Router.get('/Nepal.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Nepal.css"))
        })
    }
    module.exports = Nepal_Express;
    