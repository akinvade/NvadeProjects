
    const fs = require('fs');
    const path = require('path');
    const data = require('./The_Gambia.json');
    function The_Gambia_Express(Router){
        Router.get('/The_Gambia', (req, res) => {
            res.sendFile(path.join(__dirname, "The_Gambia.html"))
        })
        Router.get('/The_Gambia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "The_Gambia.js"))
        })
        Router.get('/The_Gambia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "The_Gambia.css"))
        })
    }
    module.exports = The_Gambia_Express;
    