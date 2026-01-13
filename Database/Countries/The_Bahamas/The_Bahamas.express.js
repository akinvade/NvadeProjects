
    const fs = require('fs');
    const path = require('path');
    const data = require('./The_Bahamas.json');
    function The_Bahamas_Express(Router){
        Router.get('/The_Bahamas', (req, res) => {
            res.sendFile(path.join(__dirname, "The_Bahamas.html"))
        })
        Router.get('/The_Bahamas.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "The_Bahamas.js"))
        })
        Router.get('/The_Bahamas.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "The_Bahamas.css"))
        })
    }
    module.exports = The_Bahamas_Express;
    