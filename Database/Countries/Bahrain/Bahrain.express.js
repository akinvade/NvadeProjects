
    const fs = require('fs');
    const path = require('path');
    const data = require('./Bahrain.json');
    function Bahrain_Express(Router){
        Router.get('/Bahrain', (req, res) => {
            res.sendFile(path.join(__dirname, "Bahrain.html"))
        })
        Router.get('/Bahrain.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Bahrain.js"))
        })
        Router.get('/Bahrain.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Bahrain.css"))
        })
    }
    module.exports = Bahrain_Express;
    