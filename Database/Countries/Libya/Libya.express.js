
    const fs = require('fs');
    const path = require('path');
    const data = require('./Libya.json');
    function Libya_Express(Router){
        Router.get('/Libya', (req, res) => {
            res.sendFile(path.join(__dirname, "Libya.html"))
        })
        Router.get('/Libya.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Libya.js"))
        })
        Router.get('/Libya.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Libya.css"))
        })
    }
    module.exports = Libya_Express;
    