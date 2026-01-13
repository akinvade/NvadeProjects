
    const fs = require('fs');
    const path = require('path');
    const data = require('./Guinea_Bissau.json');
    function Guinea_Bissau_Express(Router){
        Router.get('/Guinea_Bissau', (req, res) => {
            res.sendFile(path.join(__dirname, "Guinea_Bissau.html"))
        })
        Router.get('/Guinea_Bissau.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Guinea_Bissau.js"))
        })
        Router.get('/Guinea_Bissau.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Guinea_Bissau.css"))
        })
    }
    module.exports = Guinea_Bissau_Express;
    