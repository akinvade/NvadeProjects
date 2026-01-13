
    const fs = require('fs');
    const path = require('path');
    const data = require('./Andorra.json');
    function Andorra_Express(Router){
        Router.get('/Andorra', (req, res) => {
            res.sendFile(path.join(__dirname, "Andorra.html"))
        })
        Router.get('/Andorra.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Andorra.js"))
        })
        Router.get('/Andorra.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Andorra.css"))
        })
    }
    module.exports = Andorra_Express;
    