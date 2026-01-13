
    const fs = require('fs');
    const path = require('path');
    const data = require('./Heard_Island_and_McDonald_Islands.json');
    function Heard_Island_and_McDonald_Islands_Express(Router){
        Router.get('/Heard_Island_and_McDonald_Islands', (req, res) => {
            res.sendFile(path.join(__dirname, "Heard_Island_and_McDonald_Islands.html"))
        })
        Router.get('/Heard_Island_and_McDonald_Islands.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Heard_Island_and_McDonald_Islands.js"))
        })
        Router.get('/Heard_Island_and_McDonald_Islands.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Heard_Island_and_McDonald_Islands.css"))
        })
    }
    module.exports = Heard_Island_and_McDonald_Islands_Express;
    