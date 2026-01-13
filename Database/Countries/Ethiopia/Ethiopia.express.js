
    const fs = require('fs');
    const path = require('path');
    const data = require('./Ethiopia.json');
    function Ethiopia_Express(Router){
        Router.get('/Ethiopia', (req, res) => {
            res.sendFile(path.join(__dirname, "Ethiopia.html"))
        })
        Router.get('/Ethiopia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Ethiopia.js"))
        })
        Router.get('/Ethiopia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Ethiopia.css"))
        })
    }
    module.exports = Ethiopia_Express;
    