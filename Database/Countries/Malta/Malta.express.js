
    const fs = require('fs');
    const path = require('path');
    const data = require('./Malta.json');
    function Malta_Express(Router){
        Router.get('/Malta', (req, res) => {
            res.sendFile(path.join(__dirname, "Malta.html"))
        })
        Router.get('/Malta.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Malta.js"))
        })
        Router.get('/Malta.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Malta.css"))
        })
    }
    module.exports = Malta_Express;
    