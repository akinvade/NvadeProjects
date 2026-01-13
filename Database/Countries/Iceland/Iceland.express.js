
    const fs = require('fs');
    const path = require('path');
    const data = require('./Iceland.json');
    function Iceland_Express(Router){
        Router.get('/Iceland', (req, res) => {
            res.sendFile(path.join(__dirname, "Iceland.html"))
        })
        Router.get('/Iceland.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Iceland.js"))
        })
        Router.get('/Iceland.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Iceland.css"))
        })
    }
    module.exports = Iceland_Express;
    