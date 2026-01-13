
    const fs = require('fs');
    const path = require('path');
    const data = require('./Antarctica.json');
    function Antarctica_Express(Router){
        Router.get('/Antarctica', (req, res) => {
            res.sendFile(path.join(__dirname, "Antarctica.html"))
        })
        Router.get('/Antarctica.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Antarctica.js"))
        })
        Router.get('/Antarctica.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Antarctica.css"))
        })
    }
    module.exports = Antarctica_Express;
    