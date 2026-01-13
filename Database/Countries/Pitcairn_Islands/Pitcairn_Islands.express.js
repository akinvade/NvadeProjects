
    const fs = require('fs');
    const path = require('path');
    const data = require('./Pitcairn_Islands.json');
    function Pitcairn_Islands_Express(Router){
        Router.get('/Pitcairn_Islands', (req, res) => {
            res.sendFile(path.join(__dirname, "Pitcairn_Islands.html"))
        })
        Router.get('/Pitcairn_Islands.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Pitcairn_Islands.js"))
        })
        Router.get('/Pitcairn_Islands.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Pitcairn_Islands.css"))
        })
    }
    module.exports = Pitcairn_Islands_Express;
    