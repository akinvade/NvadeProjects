
    const fs = require('fs');
    const path = require('path');
    const data = require('./Cambodia.json');
    function Cambodia_Express(Router){
        Router.get('/Cambodia', (req, res) => {
            res.sendFile(path.join(__dirname, "Cambodia.html"))
        })
        Router.get('/Cambodia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Cambodia.js"))
        })
        Router.get('/Cambodia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Cambodia.css"))
        })
    }
    module.exports = Cambodia_Express;
    