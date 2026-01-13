
    const fs = require('fs');
    const path = require('path');
    const data = require('./Åland_Islands.json');
    function Åland_Islands_Express(Router){
        Router.get('/Åland_Islands', (req, res) => {
            res.sendFile(path.join(__dirname, "Åland_Islands.html"))
        })
        Router.get('/Åland_Islands.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Åland_Islands.js"))
        })
        Router.get('/Åland_Islands.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Åland_Islands.css"))
        })
    }
    module.exports = Åland_Islands_Express;
    