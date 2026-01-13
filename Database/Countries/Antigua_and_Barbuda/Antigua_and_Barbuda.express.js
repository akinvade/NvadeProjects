
    const fs = require('fs');
    const path = require('path');
    const data = require('./Antigua_and_Barbuda.json');
    function Antigua_and_Barbuda_Express(Router){
        Router.get('/Antigua_and_Barbuda', (req, res) => {
            res.sendFile(path.join(__dirname, "Antigua_and_Barbuda.html"))
        })
        Router.get('/Antigua_and_Barbuda.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Antigua_and_Barbuda.js"))
        })
        Router.get('/Antigua_and_Barbuda.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Antigua_and_Barbuda.css"))
        })
    }
    module.exports = Antigua_and_Barbuda_Express;
    