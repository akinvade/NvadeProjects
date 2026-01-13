
    const fs = require('fs');
    const path = require('path');
    const data = require('./Israel.json');
    function Israel_Express(Router){
        Router.get('/Israel', (req, res) => {
            res.sendFile(path.join(__dirname, "Israel.html"))
        })
        Router.get('/Israel.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Israel.js"))
        })
        Router.get('/Israel.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Israel.css"))
        })
    }
    module.exports = Israel_Express;
    