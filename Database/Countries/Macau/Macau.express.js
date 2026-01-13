
    const fs = require('fs');
    const path = require('path');
    const data = require('./Macau.json');
    function Macau_Express(Router){
        Router.get('/Macau', (req, res) => {
            res.sendFile(path.join(__dirname, "Macau.html"))
        })
        Router.get('/Macau.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Macau.js"))
        })
        Router.get('/Macau.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Macau.css"))
        })
    }
    module.exports = Macau_Express;
    