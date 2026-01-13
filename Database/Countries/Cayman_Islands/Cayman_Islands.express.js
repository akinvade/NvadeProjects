
    const fs = require('fs');
    const path = require('path');
    const data = require('./Cayman_Islands.json');
    function Cayman_Islands_Express(Router){
        Router.get('/Cayman_Islands', (req, res) => {
            res.sendFile(path.join(__dirname, "Cayman_Islands.html"))
        })
        Router.get('/Cayman_Islands.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Cayman_Islands.js"))
        })
        Router.get('/Cayman_Islands.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Cayman_Islands.css"))
        })
    }
    module.exports = Cayman_Islands_Express;
    