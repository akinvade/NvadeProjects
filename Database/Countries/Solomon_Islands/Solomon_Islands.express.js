
    const fs = require('fs');
    const path = require('path');
    const data = require('./Solomon_Islands.json');
    function Solomon_Islands_Express(Router){
        Router.get('/Solomon_Islands', (req, res) => {
            res.sendFile(path.join(__dirname, "Solomon_Islands.html"))
        })
        Router.get('/Solomon_Islands.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Solomon_Islands.js"))
        })
        Router.get('/Solomon_Islands.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Solomon_Islands.css"))
        })
    }
    module.exports = Solomon_Islands_Express;
    