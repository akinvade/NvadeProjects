
    const fs = require('fs');
    const path = require('path');
    const data = require('./South_Africa.json');
    function South_Africa_Express(Router){
        Router.get('/South_Africa', (req, res) => {
            res.sendFile(path.join(__dirname, "South_Africa.html"))
        })
        Router.get('/South_Africa.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "South_Africa.js"))
        })
        Router.get('/South_Africa.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "South_Africa.css"))
        })
    }
    module.exports = South_Africa_Express;
    