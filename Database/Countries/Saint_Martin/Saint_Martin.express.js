
    const fs = require('fs');
    const path = require('path');
    const data = require('./Saint_Martin.json');
    function Saint_Martin_Express(Router){
        Router.get('/Saint_Martin', (req, res) => {
            res.sendFile(path.join(__dirname, "Saint_Martin.html"))
        })
        Router.get('/Saint_Martin.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Saint_Martin.js"))
        })
        Router.get('/Saint_Martin.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Saint_Martin.css"))
        })
    }
    module.exports = Saint_Martin_Express;
    