
    const fs = require('fs');
    const path = require('path');
    const data = require('./Botswana.json');
    function Botswana_Express(Router){
        Router.get('/Botswana', (req, res) => {
            res.sendFile(path.join(__dirname, "Botswana.html"))
        })
        Router.get('/Botswana.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Botswana.js"))
        })
        Router.get('/Botswana.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Botswana.css"))
        })
    }
    module.exports = Botswana_Express;
    