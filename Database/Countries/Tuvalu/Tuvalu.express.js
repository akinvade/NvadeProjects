
    const fs = require('fs');
    const path = require('path');
    const data = require('./Tuvalu.json');
    function Tuvalu_Express(Router){
        Router.get('/Tuvalu', (req, res) => {
            res.sendFile(path.join(__dirname, "Tuvalu.html"))
        })
        Router.get('/Tuvalu.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Tuvalu.js"))
        })
        Router.get('/Tuvalu.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Tuvalu.css"))
        })
    }
    module.exports = Tuvalu_Express;
    