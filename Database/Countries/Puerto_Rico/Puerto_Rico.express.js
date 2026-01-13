
    const fs = require('fs');
    const path = require('path');
    const data = require('./Puerto_Rico.json');
    function Puerto_Rico_Express(Router){
        Router.get('/Puerto_Rico', (req, res) => {
            res.sendFile(path.join(__dirname, "Puerto_Rico.html"))
        })
        Router.get('/Puerto_Rico.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Puerto_Rico.js"))
        })
        Router.get('/Puerto_Rico.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Puerto_Rico.css"))
        })
    }
    module.exports = Puerto_Rico_Express;
    