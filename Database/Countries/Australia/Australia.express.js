
    const fs = require('fs');
    const path = require('path');
    const data = require('./Australia.json');
    function Australia_Express(Router){
        Router.get('/Australia', (req, res) => {
            res.sendFile(path.join(__dirname, "Australia.html"))
        })
        Router.get('/Australia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Australia.js"))
        })
        Router.get('/Australia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Australia.css"))
        })
    }
    module.exports = Australia_Express;
    