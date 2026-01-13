
    const fs = require('fs');
    const path = require('path');
    const data = require('./Qatar.json');
    function Qatar_Express(Router){
        Router.get('/Qatar', (req, res) => {
            res.sendFile(path.join(__dirname, "Qatar.html"))
        })
        Router.get('/Qatar.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Qatar.js"))
        })
        Router.get('/Qatar.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Qatar.css"))
        })
    }
    module.exports = Qatar_Express;
    