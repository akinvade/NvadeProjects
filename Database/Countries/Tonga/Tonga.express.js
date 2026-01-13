
    const fs = require('fs');
    const path = require('path');
    const data = require('./Tonga.json');
    function Tonga_Express(Router){
        Router.get('/Tonga', (req, res) => {
            res.sendFile(path.join(__dirname, "Tonga.html"))
        })
        Router.get('/Tonga.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Tonga.js"))
        })
        Router.get('/Tonga.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Tonga.css"))
        })
    }
    module.exports = Tonga_Express;
    