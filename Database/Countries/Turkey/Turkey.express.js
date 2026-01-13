
    const fs = require('fs');
    const path = require('path');
    const data = require('./Turkey.json');
    function Turkey_Express(Router){
        Router.get('/Turkey', (req, res) => {
            res.sendFile(path.join(__dirname, "Turkey.html"))
        })
        Router.get('/Turkey.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Turkey.js"))
        })
        Router.get('/Turkey.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Turkey.css"))
        })
    }
    module.exports = Turkey_Express;
    