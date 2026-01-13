
    const fs = require('fs');
    const path = require('path');
    const data = require('./Mali.json');
    function Mali_Express(Router){
        Router.get('/Mali', (req, res) => {
            res.sendFile(path.join(__dirname, "Mali.html"))
        })
        Router.get('/Mali.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Mali.js"))
        })
        Router.get('/Mali.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Mali.css"))
        })
    }
    module.exports = Mali_Express;
    