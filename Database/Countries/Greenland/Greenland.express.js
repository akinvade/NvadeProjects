
    const fs = require('fs');
    const path = require('path');
    const data = require('./Greenland.json');
    function Greenland_Express(Router){
        Router.get('/Greenland', (req, res) => {
            res.sendFile(path.join(__dirname, "Greenland.html"))
        })
        Router.get('/Greenland.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Greenland.js"))
        })
        Router.get('/Greenland.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Greenland.css"))
        })
    }
    module.exports = Greenland_Express;
    