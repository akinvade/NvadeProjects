
    const fs = require('fs');
    const path = require('path');
    const data = require('./Lesotho.json');
    function Lesotho_Express(Router){
        Router.get('/Lesotho', (req, res) => {
            res.sendFile(path.join(__dirname, "Lesotho.html"))
        })
        Router.get('/Lesotho.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Lesotho.js"))
        })
        Router.get('/Lesotho.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Lesotho.css"))
        })
    }
    module.exports = Lesotho_Express;
    