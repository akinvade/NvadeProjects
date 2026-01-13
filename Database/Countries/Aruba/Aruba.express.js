
    const fs = require('fs');
    const path = require('path');
    const data = require('./Aruba.json');
    function Aruba_Express(Router){
        Router.get('/Aruba', (req, res) => {
            res.sendFile(path.join(__dirname, "Aruba.html"))
        })
        Router.get('/Aruba.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Aruba.js"))
        })
        Router.get('/Aruba.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Aruba.css"))
        })
    }
    module.exports = Aruba_Express;
    