
    const fs = require('fs');
    const path = require('path');
    const data = require('./Anguilla.json');
    function Anguilla_Express(Router){
        Router.get('/Anguilla', (req, res) => {
            res.sendFile(path.join(__dirname, "Anguilla.html"))
        })
        Router.get('/Anguilla.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Anguilla.js"))
        })
        Router.get('/Anguilla.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Anguilla.css"))
        })
    }
    module.exports = Anguilla_Express;
    