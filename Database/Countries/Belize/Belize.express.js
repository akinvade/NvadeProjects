
    const fs = require('fs');
    const path = require('path');
    const data = require('./Belize.json');
    function Belize_Express(Router){
        Router.get('/Belize', (req, res) => {
            res.sendFile(path.join(__dirname, "Belize.html"))
        })
        Router.get('/Belize.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Belize.js"))
        })
        Router.get('/Belize.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Belize.css"))
        })
    }
    module.exports = Belize_Express;
    