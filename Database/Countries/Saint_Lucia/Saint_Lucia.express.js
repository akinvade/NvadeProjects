
    const fs = require('fs');
    const path = require('path');
    const data = require('./Saint_Lucia.json');
    function Saint_Lucia_Express(Router){
        Router.get('/Saint_Lucia', (req, res) => {
            res.sendFile(path.join(__dirname, "Saint_Lucia.html"))
        })
        Router.get('/Saint_Lucia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Saint_Lucia.js"))
        })
        Router.get('/Saint_Lucia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Saint_Lucia.css"))
        })
    }
    module.exports = Saint_Lucia_Express;
    