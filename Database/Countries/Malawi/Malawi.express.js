
    const fs = require('fs');
    const path = require('path');
    const data = require('./Malawi.json');
    function Malawi_Express(Router){
        Router.get('/Malawi', (req, res) => {
            res.sendFile(path.join(__dirname, "Malawi.html"))
        })
        Router.get('/Malawi.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Malawi.js"))
        })
        Router.get('/Malawi.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Malawi.css"))
        })
    }
    module.exports = Malawi_Express;
    