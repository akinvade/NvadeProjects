
    const fs = require('fs');
    const path = require('path');
    const data = require('./Palau.json');
    function Palau_Express(Router){
        Router.get('/Palau', (req, res) => {
            res.sendFile(path.join(__dirname, "Palau.html"))
        })
        Router.get('/Palau.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Palau.js"))
        })
        Router.get('/Palau.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Palau.css"))
        })
    }
    module.exports = Palau_Express;
    