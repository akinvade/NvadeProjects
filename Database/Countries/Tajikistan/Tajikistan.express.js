
    const fs = require('fs');
    const path = require('path');
    const data = require('./Tajikistan.json');
    function Tajikistan_Express(Router){
        Router.get('/Tajikistan', (req, res) => {
            res.sendFile(path.join(__dirname, "Tajikistan.html"))
        })
        Router.get('/Tajikistan.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Tajikistan.js"))
        })
        Router.get('/Tajikistan.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Tajikistan.css"))
        })
    }
    module.exports = Tajikistan_Express;
    