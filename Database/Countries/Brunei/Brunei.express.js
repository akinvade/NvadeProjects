
    const fs = require('fs');
    const path = require('path');
    const data = require('./Brunei.json');
    function Brunei_Express(Router){
        Router.get('/Brunei', (req, res) => {
            res.sendFile(path.join(__dirname, "Brunei.html"))
        })
        Router.get('/Brunei.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Brunei.js"))
        })
        Router.get('/Brunei.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Brunei.css"))
        })
    }
    module.exports = Brunei_Express;
    