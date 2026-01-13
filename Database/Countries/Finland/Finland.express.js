
    const fs = require('fs');
    const path = require('path');
    const data = require('./Finland.json');
    function Finland_Express(Router){
        Router.get('/Finland', (req, res) => {
            res.sendFile(path.join(__dirname, "Finland.html"))
        })
        Router.get('/Finland.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Finland.js"))
        })
        Router.get('/Finland.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Finland.css"))
        })
    }
    module.exports = Finland_Express;
    