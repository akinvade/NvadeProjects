
    const fs = require('fs');
    const path = require('path');
    const data = require('./China.json');
    function China_Express(Router){
        Router.get('/China', (req, res) => {
            res.sendFile(path.join(__dirname, "China.html"))
        })
        Router.get('/China.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "China.js"))
        })
        Router.get('/China.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "China.css"))
        })
    }
    module.exports = China_Express;
    