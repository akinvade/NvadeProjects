
    const fs = require('fs');
    const path = require('path');
    const data = require('./Paraguay.json');
    function Paraguay_Express(Router){
        Router.get('/Paraguay', (req, res) => {
            res.sendFile(path.join(__dirname, "Paraguay.html"))
        })
        Router.get('/Paraguay.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Paraguay.js"))
        })
        Router.get('/Paraguay.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Paraguay.css"))
        })
    }
    module.exports = Paraguay_Express;
    