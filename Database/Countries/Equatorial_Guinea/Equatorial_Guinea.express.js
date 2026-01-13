
    const fs = require('fs');
    const path = require('path');
    const data = require('./Equatorial_Guinea.json');
    function Equatorial_Guinea_Express(Router){
        Router.get('/Equatorial_Guinea', (req, res) => {
            res.sendFile(path.join(__dirname, "Equatorial_Guinea.html"))
        })
        Router.get('/Equatorial_Guinea.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Equatorial_Guinea.js"))
        })
        Router.get('/Equatorial_Guinea.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Equatorial_Guinea.css"))
        })
    }
    module.exports = Equatorial_Guinea_Express;
    