
    const fs = require('fs');
    const path = require('path');
    const data = require('./Laos.json');
    function Laos_Express(Router){
        Router.get('/Laos', (req, res) => {
            res.sendFile(path.join(__dirname, "Laos.html"))
        })
        Router.get('/Laos.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Laos.js"))
        })
        Router.get('/Laos.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Laos.css"))
        })
    }
    module.exports = Laos_Express;
    