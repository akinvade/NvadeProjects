
    const fs = require('fs');
    const path = require('path');
    const data = require('./Samoa.json');
    function Samoa_Express(Router){
        Router.get('/Samoa', (req, res) => {
            res.sendFile(path.join(__dirname, "Samoa.html"))
        })
        Router.get('/Samoa.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Samoa.js"))
        })
        Router.get('/Samoa.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Samoa.css"))
        })
    }
    module.exports = Samoa_Express;
    