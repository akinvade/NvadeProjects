
    const fs = require('fs');
    const path = require('path');
    const data = require('./Denmark.json');
    function Denmark_Express(Router){
        Router.get('/Denmark', (req, res) => {
            res.sendFile(path.join(__dirname, "Denmark.html"))
        })
        Router.get('/Denmark.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Denmark.js"))
        })
        Router.get('/Denmark.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Denmark.css"))
        })
    }
    module.exports = Denmark_Express;
    