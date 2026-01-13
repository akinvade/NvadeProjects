
    const fs = require('fs');
    const path = require('path');
    const data = require('./Fiji.json');
    function Fiji_Express(Router){
        Router.get('/Fiji', (req, res) => {
            res.sendFile(path.join(__dirname, "Fiji.html"))
        })
        Router.get('/Fiji.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Fiji.js"))
        })
        Router.get('/Fiji.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Fiji.css"))
        })
    }
    module.exports = Fiji_Express;
    