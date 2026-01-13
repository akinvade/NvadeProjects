
    const fs = require('fs');
    const path = require('path');
    const data = require('./Japan.json');
    function Japan_Express(Router){
        Router.get('/Japan', (req, res) => {
            res.sendFile(path.join(__dirname, "Japan.html"))
        })
        Router.get('/Japan.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Japan.js"))
        })
        Router.get('/Japan.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Japan.css"))
        })
    }
    module.exports = Japan_Express;
    