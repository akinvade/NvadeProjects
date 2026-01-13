
    const fs = require('fs');
    const path = require('path');
    const data = require('./Republic_of_Kosovo.json');
    function Republic_of_Kosovo_Express(Router){
        Router.get('/Republic_of_Kosovo', (req, res) => {
            res.sendFile(path.join(__dirname, "Republic_of_Kosovo.html"))
        })
        Router.get('/Republic_of_Kosovo.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Republic_of_Kosovo.js"))
        })
        Router.get('/Republic_of_Kosovo.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Republic_of_Kosovo.css"))
        })
    }
    module.exports = Republic_of_Kosovo_Express;
    