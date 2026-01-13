
    const fs = require('fs');
    const path = require('path');
    const data = require('./Thailand.json');
    function Thailand_Express(Router){
        Router.get('/Thailand', (req, res) => {
            res.sendFile(path.join(__dirname, "Thailand.html"))
        })
        Router.get('/Thailand.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Thailand.js"))
        })
        Router.get('/Thailand.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Thailand.css"))
        })
    }
    module.exports = Thailand_Express;
    