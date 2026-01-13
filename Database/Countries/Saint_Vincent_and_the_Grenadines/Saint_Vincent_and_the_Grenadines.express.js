
    const fs = require('fs');
    const path = require('path');
    const data = require('./Saint_Vincent_and_the_Grenadines.json');
    function Saint_Vincent_and_the_Grenadines_Express(Router){
        Router.get('/Saint_Vincent_and_the_Grenadines', (req, res) => {
            res.sendFile(path.join(__dirname, "Saint_Vincent_and_the_Grenadines.html"))
        })
        Router.get('/Saint_Vincent_and_the_Grenadines.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Saint_Vincent_and_the_Grenadines.js"))
        })
        Router.get('/Saint_Vincent_and_the_Grenadines.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Saint_Vincent_and_the_Grenadines.css"))
        })
    }
    module.exports = Saint_Vincent_and_the_Grenadines_Express;
    