
    const fs = require('fs');
    const path = require('path');
    const data = require('./Yemen.json');
    function Yemen_Express(Router){
        Router.get('/Yemen', (req, res) => {
            res.sendFile(path.join(__dirname, "Yemen.html"))
        })
        Router.get('/Yemen.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Yemen.js"))
        })
        Router.get('/Yemen.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Yemen.css"))
        })
    }
    module.exports = Yemen_Express;
    