
    const fs = require('fs');
    const path = require('path');
    const data = require('./Cyprus.json');
    function Cyprus_Express(Router){
        Router.get('/Cyprus', (req, res) => {
            res.sendFile(path.join(__dirname, "Cyprus.html"))
        })
        Router.get('/Cyprus.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Cyprus.js"))
        })
        Router.get('/Cyprus.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Cyprus.css"))
        })
    }
    module.exports = Cyprus_Express;
    