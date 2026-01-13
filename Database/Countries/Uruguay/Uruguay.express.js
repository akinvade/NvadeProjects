
    const fs = require('fs');
    const path = require('path');
    const data = require('./Uruguay.json');
    function Uruguay_Express(Router){
        Router.get('/Uruguay', (req, res) => {
            res.sendFile(path.join(__dirname, "Uruguay.html"))
        })
        Router.get('/Uruguay.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Uruguay.js"))
        })
        Router.get('/Uruguay.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Uruguay.css"))
        })
    }
    module.exports = Uruguay_Express;
    