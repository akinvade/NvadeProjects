
    const fs = require('fs');
    const path = require('path');
    const data = require('./Kyrgyzstan.json');
    function Kyrgyzstan_Express(Router){
        Router.get('/Kyrgyzstan', (req, res) => {
            res.sendFile(path.join(__dirname, "Kyrgyzstan.html"))
        })
        Router.get('/Kyrgyzstan.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Kyrgyzstan.js"))
        })
        Router.get('/Kyrgyzstan.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Kyrgyzstan.css"))
        })
    }
    module.exports = Kyrgyzstan_Express;
    