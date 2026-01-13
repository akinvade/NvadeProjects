
    const fs = require('fs');
    const path = require('path');
    const data = require('./Bangladesh.json');
    function Bangladesh_Express(Router){
        Router.get('/Bangladesh', (req, res) => {
            res.sendFile(path.join(__dirname, "Bangladesh.html"))
        })
        Router.get('/Bangladesh.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Bangladesh.js"))
        })
        Router.get('/Bangladesh.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Bangladesh.css"))
        })
    }
    module.exports = Bangladesh_Express;
    