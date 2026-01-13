
    const fs = require('fs');
    const path = require('path');
    const data = require('./Somalia.json');
    function Somalia_Express(Router){
        Router.get('/Somalia', (req, res) => {
            res.sendFile(path.join(__dirname, "Somalia.html"))
        })
        Router.get('/Somalia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Somalia.js"))
        })
        Router.get('/Somalia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Somalia.css"))
        })
    }
    module.exports = Somalia_Express;
    