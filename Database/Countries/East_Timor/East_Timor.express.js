
    const fs = require('fs');
    const path = require('path');
    const data = require('./East_Timor.json');
    function East_Timor_Express(Router){
        Router.get('/East_Timor', (req, res) => {
            res.sendFile(path.join(__dirname, "East_Timor.html"))
        })
        Router.get('/East_Timor.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "East_Timor.js"))
        })
        Router.get('/East_Timor.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "East_Timor.css"))
        })
    }
    module.exports = East_Timor_Express;
    