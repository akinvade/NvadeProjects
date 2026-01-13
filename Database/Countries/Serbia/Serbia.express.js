
    const fs = require('fs');
    const path = require('path');
    const data = require('./Serbia.json');
    function Serbia_Express(Router){
        Router.get('/Serbia', (req, res) => {
            res.sendFile(path.join(__dirname, "Serbia.html"))
        })
        Router.get('/Serbia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Serbia.js"))
        })
        Router.get('/Serbia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Serbia.css"))
        })
    }
    module.exports = Serbia_Express;
    