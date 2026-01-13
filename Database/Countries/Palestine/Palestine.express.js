
    const fs = require('fs');
    const path = require('path');
    const data = require('./Palestine.json');
    function Palestine_Express(Router){
        Router.get('/Palestine', (req, res) => {
            res.sendFile(path.join(__dirname, "Palestine.html"))
        })
        Router.get('/Palestine.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Palestine.js"))
        })
        Router.get('/Palestine.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Palestine.css"))
        })
    }
    module.exports = Palestine_Express;
    