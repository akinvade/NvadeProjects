
    const fs = require('fs');
    const path = require('path');
    const data = require('./Hong_Kong.json');
    function Hong_Kong_Express(Router){
        Router.get('/Hong_Kong', (req, res) => {
            res.sendFile(path.join(__dirname, "Hong_Kong.html"))
        })
        Router.get('/Hong_Kong.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Hong_Kong.js"))
        })
        Router.get('/Hong_Kong.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Hong_Kong.css"))
        })
    }
    module.exports = Hong_Kong_Express;
    