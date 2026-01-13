
    const fs = require('fs');
    const path = require('path');
    const data = require('./Egypt.json');
    function Egypt_Express(Router){
        Router.get('/Egypt', (req, res) => {
            res.sendFile(path.join(__dirname, "Egypt.html"))
        })
        Router.get('/Egypt.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Egypt.js"))
        })
        Router.get('/Egypt.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Egypt.css"))
        })
    }
    module.exports = Egypt_Express;
    