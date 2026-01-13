
    const fs = require('fs');
    const path = require('path');
    const data = require('./Turkmenistan.json');
    function Turkmenistan_Express(Router){
        Router.get('/Turkmenistan', (req, res) => {
            res.sendFile(path.join(__dirname, "Turkmenistan.html"))
        })
        Router.get('/Turkmenistan.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Turkmenistan.js"))
        })
        Router.get('/Turkmenistan.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Turkmenistan.css"))
        })
    }
    module.exports = Turkmenistan_Express;
    