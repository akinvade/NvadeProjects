
    const fs = require('fs');
    const path = require('path');
    const data = require('./Nauru.json');
    function Nauru_Express(Router){
        Router.get('/Nauru', (req, res) => {
            res.sendFile(path.join(__dirname, "Nauru.html"))
        })
        Router.get('/Nauru.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Nauru.js"))
        })
        Router.get('/Nauru.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Nauru.css"))
        })
    }
    module.exports = Nauru_Express;
    