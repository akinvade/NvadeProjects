
    const fs = require('fs');
    const path = require('path');
    const data = require('./Swaziland.json');
    function Swaziland_Express(Router){
        Router.get('/Swaziland', (req, res) => {
            res.sendFile(path.join(__dirname, "Swaziland.html"))
        })
        Router.get('/Swaziland.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Swaziland.js"))
        })
        Router.get('/Swaziland.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Swaziland.css"))
        })
    }
    module.exports = Swaziland_Express;
    