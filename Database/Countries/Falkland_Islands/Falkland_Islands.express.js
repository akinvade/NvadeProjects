
    const fs = require('fs');
    const path = require('path');
    const data = require('./Falkland_Islands.json');
    function Falkland_Islands_Express(Router){
        Router.get('/Falkland_Islands', (req, res) => {
            res.sendFile(path.join(__dirname, "Falkland_Islands.html"))
        })
        Router.get('/Falkland_Islands.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Falkland_Islands.js"))
        })
        Router.get('/Falkland_Islands.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Falkland_Islands.css"))
        })
    }
    module.exports = Falkland_Islands_Express;
    