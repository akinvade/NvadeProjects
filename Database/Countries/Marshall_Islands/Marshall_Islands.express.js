
    const fs = require('fs');
    const path = require('path');
    const data = require('./Marshall_Islands.json');
    function Marshall_Islands_Express(Router){
        Router.get('/Marshall_Islands', (req, res) => {
            res.sendFile(path.join(__dirname, "Marshall_Islands.html"))
        })
        Router.get('/Marshall_Islands.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Marshall_Islands.js"))
        })
        Router.get('/Marshall_Islands.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Marshall_Islands.css"))
        })
    }
    module.exports = Marshall_Islands_Express;
    