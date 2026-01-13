
    const fs = require('fs');
    const path = require('path');
    const data = require('./Liberia.json');
    function Liberia_Express(Router){
        Router.get('/Liberia', (req, res) => {
            res.sendFile(path.join(__dirname, "Liberia.html"))
        })
        Router.get('/Liberia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Liberia.js"))
        })
        Router.get('/Liberia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Liberia.css"))
        })
    }
    module.exports = Liberia_Express;
    