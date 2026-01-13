
    const fs = require('fs');
    const path = require('path');
    const data = require('./Montserrat.json');
    function Montserrat_Express(Router){
        Router.get('/Montserrat', (req, res) => {
            res.sendFile(path.join(__dirname, "Montserrat.html"))
        })
        Router.get('/Montserrat.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Montserrat.js"))
        })
        Router.get('/Montserrat.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Montserrat.css"))
        })
    }
    module.exports = Montserrat_Express;
    