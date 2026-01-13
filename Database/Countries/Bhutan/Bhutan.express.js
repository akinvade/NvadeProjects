
    const fs = require('fs');
    const path = require('path');
    const data = require('./Bhutan.json');
    function Bhutan_Express(Router){
        Router.get('/Bhutan', (req, res) => {
            res.sendFile(path.join(__dirname, "Bhutan.html"))
        })
        Router.get('/Bhutan.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Bhutan.js"))
        })
        Router.get('/Bhutan.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Bhutan.css"))
        })
    }
    module.exports = Bhutan_Express;
    