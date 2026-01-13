
    const fs = require('fs');
    const path = require('path');
    const data = require('./Dominica.json');
    function Dominica_Express(Router){
        Router.get('/Dominica', (req, res) => {
            res.sendFile(path.join(__dirname, "Dominica.html"))
        })
        Router.get('/Dominica.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Dominica.js"))
        })
        Router.get('/Dominica.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Dominica.css"))
        })
    }
    module.exports = Dominica_Express;
    