
    const fs = require('fs');
    const path = require('path');
    const data = require('./Armenia.json');
    function Armenia_Express(Router){
        Router.get('/Armenia', (req, res) => {
            res.sendFile(path.join(__dirname, "Armenia.html"))
        })
        Router.get('/Armenia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Armenia.js"))
        })
        Router.get('/Armenia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Armenia.css"))
        })
    }
    module.exports = Armenia_Express;
    