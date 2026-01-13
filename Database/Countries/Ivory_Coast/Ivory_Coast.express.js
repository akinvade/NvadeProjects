
    const fs = require('fs');
    const path = require('path');
    const data = require('./Ivory_Coast.json');
    function Ivory_Coast_Express(Router){
        Router.get('/Ivory_Coast', (req, res) => {
            res.sendFile(path.join(__dirname, "Ivory_Coast.html"))
        })
        Router.get('/Ivory_Coast.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Ivory_Coast.js"))
        })
        Router.get('/Ivory_Coast.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Ivory_Coast.css"))
        })
    }
    module.exports = Ivory_Coast_Express;
    