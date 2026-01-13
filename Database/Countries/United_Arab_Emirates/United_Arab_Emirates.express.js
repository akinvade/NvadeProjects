
    const fs = require('fs');
    const path = require('path');
    const data = require('./United_Arab_Emirates.json');
    function United_Arab_Emirates_Express(Router){
        Router.get('/United_Arab_Emirates', (req, res) => {
            res.sendFile(path.join(__dirname, "United_Arab_Emirates.html"))
        })
        Router.get('/United_Arab_Emirates.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "United_Arab_Emirates.js"))
        })
        Router.get('/United_Arab_Emirates.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "United_Arab_Emirates.css"))
        })
    }
    module.exports = United_Arab_Emirates_Express;
    