
    const fs = require('fs');
    const path = require('path');
    const data = require('./France.json');
    function France_Express(Router){
        Router.get('/France', (req, res) => {
            res.sendFile(path.join(__dirname, "France.html"))
        })
        Router.get('/France.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "France.js"))
        })
        Router.get('/France.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "France.css"))
        })
    }
    module.exports = France_Express;
    