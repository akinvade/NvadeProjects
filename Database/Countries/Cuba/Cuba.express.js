
    const fs = require('fs');
    const path = require('path');
    const data = require('./Cuba.json');
    function Cuba_Express(Router){
        Router.get('/Cuba', (req, res) => {
            res.sendFile(path.join(__dirname, "Cuba.html"))
        })
        Router.get('/Cuba.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Cuba.js"))
        })
        Router.get('/Cuba.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Cuba.css"))
        })
    }
    module.exports = Cuba_Express;
    