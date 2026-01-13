
    const fs = require('fs');
    const path = require('path');
    const data = require('./Holy_See.json');
    function Holy_See_Express(Router){
        Router.get('/Holy_See', (req, res) => {
            res.sendFile(path.join(__dirname, "Holy_See.html"))
        })
        Router.get('/Holy_See.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Holy_See.js"))
        })
        Router.get('/Holy_See.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Holy_See.css"))
        })
    }
    module.exports = Holy_See_Express;
    