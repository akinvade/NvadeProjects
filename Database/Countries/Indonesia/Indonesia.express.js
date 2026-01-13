
    const fs = require('fs');
    const path = require('path');
    const data = require('./Indonesia.json');
    function Indonesia_Express(Router){
        Router.get('/Indonesia', (req, res) => {
            res.sendFile(path.join(__dirname, "Indonesia.html"))
        })
        Router.get('/Indonesia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Indonesia.js"))
        })
        Router.get('/Indonesia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Indonesia.css"))
        })
    }
    module.exports = Indonesia_Express;
    