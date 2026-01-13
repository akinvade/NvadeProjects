
    const fs = require('fs');
    const path = require('path');
    const data = require('./Cameroon.json');
    function Cameroon_Express(Router){
        Router.get('/Cameroon', (req, res) => {
            res.sendFile(path.join(__dirname, "Cameroon.html"))
        })
        Router.get('/Cameroon.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Cameroon.js"))
        })
        Router.get('/Cameroon.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Cameroon.css"))
        })
    }
    module.exports = Cameroon_Express;
    