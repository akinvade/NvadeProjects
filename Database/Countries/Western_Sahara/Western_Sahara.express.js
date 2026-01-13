
    const fs = require('fs');
    const path = require('path');
    const data = require('./Western_Sahara.json');
    function Western_Sahara_Express(Router){
        Router.get('/Western_Sahara', (req, res) => {
            res.sendFile(path.join(__dirname, "Western_Sahara.html"))
        })
        Router.get('/Western_Sahara.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Western_Sahara.js"))
        })
        Router.get('/Western_Sahara.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Western_Sahara.css"))
        })
    }
    module.exports = Western_Sahara_Express;
    