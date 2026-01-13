
    const fs = require('fs');
    const path = require('path');
    const data = require('./Cook_Islands.json');
    function Cook_Islands_Express(Router){
        Router.get('/Cook_Islands', (req, res) => {
            res.sendFile(path.join(__dirname, "Cook_Islands.html"))
        })
        Router.get('/Cook_Islands.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Cook_Islands.js"))
        })
        Router.get('/Cook_Islands.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Cook_Islands.css"))
        })
    }
    module.exports = Cook_Islands_Express;
    