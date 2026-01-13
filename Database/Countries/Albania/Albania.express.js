
    const fs = require('fs');
    const path = require('path');
    const data = require('./Albania.json');
    function Albania_Express(Router){
        Router.get('/Albania', (req, res) => {
            res.sendFile(path.join(__dirname, "Albania.html"))
        })
        Router.get('/Albania.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Albania.js"))
        })
        Router.get('/Albania.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Albania.css"))
        })
    }
    module.exports = Albania_Express;
    