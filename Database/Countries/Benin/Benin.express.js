
    const fs = require('fs');
    const path = require('path');
    const data = require('./Benin.json');
    function Benin_Express(Router){
        Router.get('/Benin', (req, res) => {
            res.sendFile(path.join(__dirname, "Benin.html"))
        })
        Router.get('/Benin.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Benin.js"))
        })
        Router.get('/Benin.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Benin.css"))
        })
    }
    module.exports = Benin_Express;
    