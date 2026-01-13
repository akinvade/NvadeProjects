
    const fs = require('fs');
    const path = require('path');
    const data = require('./United_Kingdom.json');
    function United_Kingdom_Express(Router){
        Router.get('/United_Kingdom', (req, res) => {
            res.sendFile(path.join(__dirname, "United_Kingdom.html"))
        })
        Router.get('/United_Kingdom.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "United_Kingdom.js"))
        })
        Router.get('/United_Kingdom.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "United_Kingdom.css"))
        })
    }
    module.exports = United_Kingdom_Express;
    