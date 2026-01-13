
    const fs = require('fs');
    const path = require('path');
    const data = require('./Eritrea.json');
    function Eritrea_Express(Router){
        Router.get('/Eritrea', (req, res) => {
            res.sendFile(path.join(__dirname, "Eritrea.html"))
        })
        Router.get('/Eritrea.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Eritrea.js"))
        })
        Router.get('/Eritrea.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Eritrea.css"))
        })
    }
    module.exports = Eritrea_Express;
    