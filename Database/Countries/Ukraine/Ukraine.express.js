
    const fs = require('fs');
    const path = require('path');
    const data = require('./Ukraine.json');
    function Ukraine_Express(Router){
        Router.get('/Ukraine', (req, res) => {
            res.sendFile(path.join(__dirname, "Ukraine.html"))
        })
        Router.get('/Ukraine.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Ukraine.js"))
        })
        Router.get('/Ukraine.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Ukraine.css"))
        })
    }
    module.exports = Ukraine_Express;
    