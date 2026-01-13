
    const fs = require('fs');
    const path = require('path');
    const data = require('./Norway.json');
    function Norway_Express(Router){
        Router.get('/Norway', (req, res) => {
            res.sendFile(path.join(__dirname, "Norway.html"))
        })
        Router.get('/Norway.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Norway.js"))
        })
        Router.get('/Norway.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Norway.css"))
        })
    }
    module.exports = Norway_Express;
    