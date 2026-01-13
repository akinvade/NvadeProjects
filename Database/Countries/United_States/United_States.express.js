
    const fs = require('fs');
    const path = require('path');
    const data = require('./United_States.json');
    function United_States_Express(Router){
        Router.get('/United_States', (req, res) => {
            res.sendFile(path.join(__dirname, "United_States.html"))
        })
        Router.get('/United_States.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "United_States.js"))
        })
        Router.get('/United_States.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "United_States.css"))
        })
    }
    module.exports = United_States_Express;
    