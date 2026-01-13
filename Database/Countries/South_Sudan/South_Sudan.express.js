
    const fs = require('fs');
    const path = require('path');
    const data = require('./South_Sudan.json');
    function South_Sudan_Express(Router){
        Router.get('/South_Sudan', (req, res) => {
            res.sendFile(path.join(__dirname, "South_Sudan.html"))
        })
        Router.get('/South_Sudan.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "South_Sudan.js"))
        })
        Router.get('/South_Sudan.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "South_Sudan.css"))
        })
    }
    module.exports = South_Sudan_Express;
    