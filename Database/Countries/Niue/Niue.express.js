
    const fs = require('fs');
    const path = require('path');
    const data = require('./Niue.json');
    function Niue_Express(Router){
        Router.get('/Niue', (req, res) => {
            res.sendFile(path.join(__dirname, "Niue.html"))
        })
        Router.get('/Niue.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Niue.js"))
        })
        Router.get('/Niue.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Niue.css"))
        })
    }
    module.exports = Niue_Express;
    