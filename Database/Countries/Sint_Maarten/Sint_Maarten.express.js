
    const fs = require('fs');
    const path = require('path');
    const data = require('./Sint_Maarten.json');
    function Sint_Maarten_Express(Router){
        Router.get('/Sint_Maarten', (req, res) => {
            res.sendFile(path.join(__dirname, "Sint_Maarten.html"))
        })
        Router.get('/Sint_Maarten.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Sint_Maarten.js"))
        })
        Router.get('/Sint_Maarten.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Sint_Maarten.css"))
        })
    }
    module.exports = Sint_Maarten_Express;
    