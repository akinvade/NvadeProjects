
    const fs = require('fs');
    const path = require('path');
    const data = require('./Republic_of_Macedonia.json');
    function Republic_of_Macedonia_Express(Router){
        Router.get('/Republic_of_Macedonia', (req, res) => {
            res.sendFile(path.join(__dirname, "Republic_of_Macedonia.html"))
        })
        Router.get('/Republic_of_Macedonia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Republic_of_Macedonia.js"))
        })
        Router.get('/Republic_of_Macedonia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Republic_of_Macedonia.css"))
        })
    }
    module.exports = Republic_of_Macedonia_Express;
    