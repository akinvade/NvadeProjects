
    const fs = require('fs');
    const path = require('path');
    const data = require('./Saint_Barthélemy.json');
    function Saint_Barthélemy_Express(Router){
        Router.get('/Saint_Barthélemy', (req, res) => {
            res.sendFile(path.join(__dirname, "Saint_Barthélemy.html"))
        })
        Router.get('/Saint_Barthélemy.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Saint_Barthélemy.js"))
        })
        Router.get('/Saint_Barthélemy.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Saint_Barthélemy.css"))
        })
    }
    module.exports = Saint_Barthélemy_Express;
    