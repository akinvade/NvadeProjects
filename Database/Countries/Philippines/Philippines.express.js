
    const fs = require('fs');
    const path = require('path');
    const data = require('./Philippines.json');
    function Philippines_Express(Router){
        Router.get('/Philippines', (req, res) => {
            res.sendFile(path.join(__dirname, "Philippines.html"))
        })
        Router.get('/Philippines.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Philippines.js"))
        })
        Router.get('/Philippines.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Philippines.css"))
        })
    }
    module.exports = Philippines_Express;
    