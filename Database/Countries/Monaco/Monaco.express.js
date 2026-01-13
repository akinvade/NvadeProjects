
    const fs = require('fs');
    const path = require('path');
    const data = require('./Monaco.json');
    function Monaco_Express(Router){
        Router.get('/Monaco', (req, res) => {
            res.sendFile(path.join(__dirname, "Monaco.html"))
        })
        Router.get('/Monaco.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Monaco.js"))
        })
        Router.get('/Monaco.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Monaco.css"))
        })
    }
    module.exports = Monaco_Express;
    