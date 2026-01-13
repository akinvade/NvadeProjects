
    const fs = require('fs');
    const path = require('path');
    const data = require('./Latvia.json');
    function Latvia_Express(Router){
        Router.get('/Latvia', (req, res) => {
            res.sendFile(path.join(__dirname, "Latvia.html"))
        })
        Router.get('/Latvia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Latvia.js"))
        })
        Router.get('/Latvia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Latvia.css"))
        })
    }
    module.exports = Latvia_Express;
    