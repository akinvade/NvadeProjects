
    const fs = require('fs');
    const path = require('path');
    const data = require('./Jamaica.json');
    function Jamaica_Express(Router){
        Router.get('/Jamaica', (req, res) => {
            res.sendFile(path.join(__dirname, "Jamaica.html"))
        })
        Router.get('/Jamaica.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Jamaica.js"))
        })
        Router.get('/Jamaica.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Jamaica.css"))
        })
    }
    module.exports = Jamaica_Express;
    