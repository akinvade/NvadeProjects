
    const fs = require('fs');
    const path = require('path');
    const data = require('./Wallis_and_Futuna.json');
    function Wallis_and_Futuna_Express(Router){
        Router.get('/Wallis_and_Futuna', (req, res) => {
            res.sendFile(path.join(__dirname, "Wallis_and_Futuna.html"))
        })
        Router.get('/Wallis_and_Futuna.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Wallis_and_Futuna.js"))
        })
        Router.get('/Wallis_and_Futuna.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Wallis_and_Futuna.css"))
        })
    }
    module.exports = Wallis_and_Futuna_Express;
    