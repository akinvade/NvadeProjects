
    const fs = require('fs');
    const path = require('path');
    const data = require('./Tokelau.json');
    function Tokelau_Express(Router){
        Router.get('/Tokelau', (req, res) => {
            res.sendFile(path.join(__dirname, "Tokelau.html"))
        })
        Router.get('/Tokelau.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Tokelau.js"))
        })
        Router.get('/Tokelau.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Tokelau.css"))
        })
    }
    module.exports = Tokelau_Express;
    