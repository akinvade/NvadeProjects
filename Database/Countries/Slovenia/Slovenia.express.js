
    const fs = require('fs');
    const path = require('path');
    const data = require('./Slovenia.json');
    function Slovenia_Express(Router){
        Router.get('/Slovenia', (req, res) => {
            res.sendFile(path.join(__dirname, "Slovenia.html"))
        })
        Router.get('/Slovenia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Slovenia.js"))
        })
        Router.get('/Slovenia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Slovenia.css"))
        })
    }
    module.exports = Slovenia_Express;
    