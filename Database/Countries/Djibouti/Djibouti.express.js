
    const fs = require('fs');
    const path = require('path');
    const data = require('./Djibouti.json');
    function Djibouti_Express(Router){
        Router.get('/Djibouti', (req, res) => {
            res.sendFile(path.join(__dirname, "Djibouti.html"))
        })
        Router.get('/Djibouti.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Djibouti.js"))
        })
        Router.get('/Djibouti.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Djibouti.css"))
        })
    }
    module.exports = Djibouti_Express;
    