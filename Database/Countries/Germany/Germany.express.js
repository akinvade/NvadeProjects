
    const fs = require('fs');
    const path = require('path');
    const data = require('./Germany.json');
    function Germany_Express(Router){
        Router.get('/Germany', (req, res) => {
            res.sendFile(path.join(__dirname, "Germany.html"))
        })
        Router.get('/Germany.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Germany.js"))
        })
        Router.get('/Germany.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Germany.css"))
        })
    }
    module.exports = Germany_Express;
    