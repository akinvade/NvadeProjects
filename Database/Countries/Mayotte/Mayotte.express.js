
    const fs = require('fs');
    const path = require('path');
    const data = require('./Mayotte.json');
    function Mayotte_Express(Router){
        Router.get('/Mayotte', (req, res) => {
            res.sendFile(path.join(__dirname, "Mayotte.html"))
        })
        Router.get('/Mayotte.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Mayotte.js"))
        })
        Router.get('/Mayotte.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Mayotte.css"))
        })
    }
    module.exports = Mayotte_Express;
    