
    const fs = require('fs');
    const path = require('path');
    const data = require('./Liechtenstein.json');
    function Liechtenstein_Express(Router){
        Router.get('/Liechtenstein', (req, res) => {
            res.sendFile(path.join(__dirname, "Liechtenstein.html"))
        })
        Router.get('/Liechtenstein.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Liechtenstein.js"))
        })
        Router.get('/Liechtenstein.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Liechtenstein.css"))
        })
    }
    module.exports = Liechtenstein_Express;
    