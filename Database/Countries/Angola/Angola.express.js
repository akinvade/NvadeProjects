
    const fs = require('fs');
    const path = require('path');
    const data = require('./Angola.json');
    function Angola_Express(Router){
        Router.get('/Angola', (req, res) => {
            res.sendFile(path.join(__dirname, "Angola.html"))
        })
        Router.get('/Angola.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Angola.js"))
        })
        Router.get('/Angola.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Angola.css"))
        })
    }
    module.exports = Angola_Express;
    