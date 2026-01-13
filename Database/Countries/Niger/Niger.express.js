
    const fs = require('fs');
    const path = require('path');
    const data = require('./Niger.json');
    function Niger_Express(Router){
        Router.get('/Niger', (req, res) => {
            res.sendFile(path.join(__dirname, "Niger.html"))
        })
        Router.get('/Niger.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Niger.js"))
        })
        Router.get('/Niger.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Niger.css"))
        })
    }
    module.exports = Niger_Express;
    