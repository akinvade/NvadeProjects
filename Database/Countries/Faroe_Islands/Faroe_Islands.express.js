
    const fs = require('fs');
    const path = require('path');
    const data = require('./Faroe_Islands.json');
    function Faroe_Islands_Express(Router){
        Router.get('/Faroe_Islands', (req, res) => {
            res.sendFile(path.join(__dirname, "Faroe_Islands.html"))
        })
        Router.get('/Faroe_Islands.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Faroe_Islands.js"))
        })
        Router.get('/Faroe_Islands.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Faroe_Islands.css"))
        })
    }
    module.exports = Faroe_Islands_Express;
    