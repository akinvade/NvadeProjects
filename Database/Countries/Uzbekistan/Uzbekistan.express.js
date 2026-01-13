
    const fs = require('fs');
    const path = require('path');
    const data = require('./Uzbekistan.json');
    function Uzbekistan_Express(Router){
        Router.get('/Uzbekistan', (req, res) => {
            res.sendFile(path.join(__dirname, "Uzbekistan.html"))
        })
        Router.get('/Uzbekistan.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Uzbekistan.js"))
        })
        Router.get('/Uzbekistan.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Uzbekistan.css"))
        })
    }
    module.exports = Uzbekistan_Express;
    