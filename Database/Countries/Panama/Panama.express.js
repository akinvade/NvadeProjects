
    const fs = require('fs');
    const path = require('path');
    const data = require('./Panama.json');
    function Panama_Express(Router){
        Router.get('/Panama', (req, res) => {
            res.sendFile(path.join(__dirname, "Panama.html"))
        })
        Router.get('/Panama.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Panama.js"))
        })
        Router.get('/Panama.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Panama.css"))
        })
    }
    module.exports = Panama_Express;
    