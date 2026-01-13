
    const fs = require('fs');
    const path = require('path');
    const data = require('./Costa_Rica.json');
    function Costa_Rica_Express(Router){
        Router.get('/Costa_Rica', (req, res) => {
            res.sendFile(path.join(__dirname, "Costa_Rica.html"))
        })
        Router.get('/Costa_Rica.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Costa_Rica.js"))
        })
        Router.get('/Costa_Rica.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Costa_Rica.css"))
        })
    }
    module.exports = Costa_Rica_Express;
    