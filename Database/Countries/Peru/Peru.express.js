
    const fs = require('fs');
    const path = require('path');
    const data = require('./Peru.json');
    function Peru_Express(Router){
        Router.get('/Peru', (req, res) => {
            res.sendFile(path.join(__dirname, "Peru.html"))
        })
        Router.get('/Peru.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Peru.js"))
        })
        Router.get('/Peru.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Peru.css"))
        })
    }
    module.exports = Peru_Express;
    