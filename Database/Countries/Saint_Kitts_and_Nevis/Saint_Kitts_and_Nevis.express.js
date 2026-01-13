
    const fs = require('fs');
    const path = require('path');
    const data = require('./Saint_Kitts_and_Nevis.json');
    function Saint_Kitts_and_Nevis_Express(Router){
        Router.get('/Saint_Kitts_and_Nevis', (req, res) => {
            res.sendFile(path.join(__dirname, "Saint_Kitts_and_Nevis.html"))
        })
        Router.get('/Saint_Kitts_and_Nevis.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Saint_Kitts_and_Nevis.js"))
        })
        Router.get('/Saint_Kitts_and_Nevis.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Saint_Kitts_and_Nevis.css"))
        })
    }
    module.exports = Saint_Kitts_and_Nevis_Express;
    