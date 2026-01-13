
    const fs = require('fs');
    const path = require('path');
    const data = require('./Vietnam.json');
    function Vietnam_Express(Router){
        Router.get('/Vietnam', (req, res) => {
            res.sendFile(path.join(__dirname, "Vietnam.html"))
        })
        Router.get('/Vietnam.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Vietnam.js"))
        })
        Router.get('/Vietnam.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Vietnam.css"))
        })
    }
    module.exports = Vietnam_Express;
    