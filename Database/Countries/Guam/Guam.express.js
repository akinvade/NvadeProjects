
    const fs = require('fs');
    const path = require('path');
    const data = require('./Guam.json');
    function Guam_Express(Router){
        Router.get('/Guam', (req, res) => {
            res.sendFile(path.join(__dirname, "Guam.html"))
        })
        Router.get('/Guam.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Guam.js"))
        })
        Router.get('/Guam.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Guam.css"))
        })
    }
    module.exports = Guam_Express;
    