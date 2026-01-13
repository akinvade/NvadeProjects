
    const fs = require('fs');
    const path = require('path');
    const data = require('./Colombia.json');
    function Colombia_Express(Router){
        Router.get('/Colombia', (req, res) => {
            res.sendFile(path.join(__dirname, "Colombia.html"))
        })
        Router.get('/Colombia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Colombia.js"))
        })
        Router.get('/Colombia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Colombia.css"))
        })
    }
    module.exports = Colombia_Express;
    