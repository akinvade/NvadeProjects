
    const fs = require('fs');
    const path = require('path');
    const data = require('./Togo.json');
    function Togo_Express(Router){
        Router.get('/Togo', (req, res) => {
            res.sendFile(path.join(__dirname, "Togo.html"))
        })
        Router.get('/Togo.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Togo.js"))
        })
        Router.get('/Togo.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Togo.css"))
        })
    }
    module.exports = Togo_Express;
    