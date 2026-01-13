
    const fs = require('fs');
    const path = require('path');
    const data = require('./Canada.json');
    function Canada_Express(Router){
        Router.get('/Canada', (req, res) => {
            res.sendFile(path.join(__dirname, "Canada.html"))
        })
        Router.get('/Canada.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Canada.js"))
        })
        Router.get('/Canada.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Canada.css"))
        })
    }
    module.exports = Canada_Express;
    