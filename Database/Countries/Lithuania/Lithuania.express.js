
    const fs = require('fs');
    const path = require('path');
    const data = require('./Lithuania.json');
    function Lithuania_Express(Router){
        Router.get('/Lithuania', (req, res) => {
            res.sendFile(path.join(__dirname, "Lithuania.html"))
        })
        Router.get('/Lithuania.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Lithuania.js"))
        })
        Router.get('/Lithuania.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Lithuania.css"))
        })
    }
    module.exports = Lithuania_Express;
    