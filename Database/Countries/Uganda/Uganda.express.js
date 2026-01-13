
    const fs = require('fs');
    const path = require('path');
    const data = require('./Uganda.json');
    function Uganda_Express(Router){
        Router.get('/Uganda', (req, res) => {
            res.sendFile(path.join(__dirname, "Uganda.html"))
        })
        Router.get('/Uganda.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Uganda.js"))
        })
        Router.get('/Uganda.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Uganda.css"))
        })
    }
    module.exports = Uganda_Express;
    