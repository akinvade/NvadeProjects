
    const fs = require('fs');
    const path = require('path');
    const data = require('./Tanzania.json');
    function Tanzania_Express(Router){
        Router.get('/Tanzania', (req, res) => {
            res.sendFile(path.join(__dirname, "Tanzania.html"))
        })
        Router.get('/Tanzania.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Tanzania.js"))
        })
        Router.get('/Tanzania.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Tanzania.css"))
        })
    }
    module.exports = Tanzania_Express;
    