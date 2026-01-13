
    const fs = require('fs');
    const path = require('path');
    const data = require('./Bulgaria.json');
    function Bulgaria_Express(Router){
        Router.get('/Bulgaria', (req, res) => {
            res.sendFile(path.join(__dirname, "Bulgaria.html"))
        })
        Router.get('/Bulgaria.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Bulgaria.js"))
        })
        Router.get('/Bulgaria.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Bulgaria.css"))
        })
    }
    module.exports = Bulgaria_Express;
    