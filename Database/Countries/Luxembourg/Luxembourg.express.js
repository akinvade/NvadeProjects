
    const fs = require('fs');
    const path = require('path');
    const data = require('./Luxembourg.json');
    function Luxembourg_Express(Router){
        Router.get('/Luxembourg', (req, res) => {
            res.sendFile(path.join(__dirname, "Luxembourg.html"))
        })
        Router.get('/Luxembourg.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Luxembourg.js"))
        })
        Router.get('/Luxembourg.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Luxembourg.css"))
        })
    }
    module.exports = Luxembourg_Express;
    