
    const fs = require('fs');
    const path = require('path');
    const data = require('./Taiwan.json');
    function Taiwan_Express(Router){
        Router.get('/Taiwan', (req, res) => {
            res.sendFile(path.join(__dirname, "Taiwan.html"))
        })
        Router.get('/Taiwan.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Taiwan.js"))
        })
        Router.get('/Taiwan.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Taiwan.css"))
        })
    }
    module.exports = Taiwan_Express;
    