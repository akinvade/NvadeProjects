
    const fs = require('fs');
    const path = require('path');
    const data = require('./Suriname.json');
    function Suriname_Express(Router){
        Router.get('/Suriname', (req, res) => {
            res.sendFile(path.join(__dirname, "Suriname.html"))
        })
        Router.get('/Suriname.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Suriname.js"))
        })
        Router.get('/Suriname.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Suriname.css"))
        })
    }
    module.exports = Suriname_Express;
    