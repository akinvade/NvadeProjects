
    const fs = require('fs');
    const path = require('path');
    const data = require('./Azerbaijan.json');
    function Azerbaijan_Express(Router){
        Router.get('/Azerbaijan', (req, res) => {
            res.sendFile(path.join(__dirname, "Azerbaijan.html"))
        })
        Router.get('/Azerbaijan.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Azerbaijan.js"))
        })
        Router.get('/Azerbaijan.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Azerbaijan.css"))
        })
    }
    module.exports = Azerbaijan_Express;
    