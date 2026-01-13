
    const fs = require('fs');
    const path = require('path');
    const data = require('./Republic_of_Ireland.json');
    function Republic_of_Ireland_Express(Router){
        Router.get('/Republic_of_Ireland', (req, res) => {
            res.sendFile(path.join(__dirname, "Republic_of_Ireland.html"))
        })
        Router.get('/Republic_of_Ireland.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Republic_of_Ireland.js"))
        })
        Router.get('/Republic_of_Ireland.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Republic_of_Ireland.css"))
        })
    }
    module.exports = Republic_of_Ireland_Express;
    