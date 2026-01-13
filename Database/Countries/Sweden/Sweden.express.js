
    const fs = require('fs');
    const path = require('path');
    const data = require('./Sweden.json');
    function Sweden_Express(Router){
        Router.get('/Sweden', (req, res) => {
            res.sendFile(path.join(__dirname, "Sweden.html"))
        })
        Router.get('/Sweden.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Sweden.js"))
        })
        Router.get('/Sweden.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Sweden.css"))
        })
    }
    module.exports = Sweden_Express;
    