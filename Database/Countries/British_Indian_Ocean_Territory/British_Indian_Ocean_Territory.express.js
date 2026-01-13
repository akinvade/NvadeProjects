
    const fs = require('fs');
    const path = require('path');
    const data = require('./British_Indian_Ocean_Territory.json');
    function British_Indian_Ocean_Territory_Express(Router){
        Router.get('/British_Indian_Ocean_Territory', (req, res) => {
            res.sendFile(path.join(__dirname, "British_Indian_Ocean_Territory.html"))
        })
        Router.get('/British_Indian_Ocean_Territory.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "British_Indian_Ocean_Territory.js"))
        })
        Router.get('/British_Indian_Ocean_Territory.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "British_Indian_Ocean_Territory.css"))
        })
    }
    module.exports = British_Indian_Ocean_Territory_Express;
    