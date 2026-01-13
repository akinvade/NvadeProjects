
    const fs = require('fs');
    const path = require('path');
    const data = require('./Austria.json');
    function Austria_Express(Router){
        Router.get('/Austria', (req, res) => {
            res.sendFile(path.join(__dirname, "Austria.html"))
        })
        Router.get('/Austria.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Austria.js"))
        })
        Router.get('/Austria.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Austria.css"))
        })
    }
    module.exports = Austria_Express;
    