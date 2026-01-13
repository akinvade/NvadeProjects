
    const fs = require('fs');
    const path = require('path');
    const data = require('./North_Korea.json');
    function North_Korea_Express(Router){
        Router.get('/North_Korea', (req, res) => {
            res.sendFile(path.join(__dirname, "North_Korea.html"))
        })
        Router.get('/North_Korea.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "North_Korea.js"))
        })
        Router.get('/North_Korea.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "North_Korea.css"))
        })
    }
    module.exports = North_Korea_Express;
    