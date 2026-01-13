
    const fs = require('fs');
    const path = require('path');
    const data = require('./Estonia.json');
    function Estonia_Express(Router){
        Router.get('/Estonia', (req, res) => {
            res.sendFile(path.join(__dirname, "Estonia.html"))
        })
        Router.get('/Estonia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Estonia.js"))
        })
        Router.get('/Estonia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Estonia.css"))
        })
    }
    module.exports = Estonia_Express;
    