
    const fs = require('fs');
    const path = require('path');
    const data = require('./Moldova.json');
    function Moldova_Express(Router){
        Router.get('/Moldova', (req, res) => {
            res.sendFile(path.join(__dirname, "Moldova.html"))
        })
        Router.get('/Moldova.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Moldova.js"))
        })
        Router.get('/Moldova.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Moldova.css"))
        })
    }
    module.exports = Moldova_Express;
    