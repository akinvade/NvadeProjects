
    const fs = require('fs');
    const path = require('path');
    const data = require('./Oman.json');
    function Oman_Express(Router){
        Router.get('/Oman', (req, res) => {
            res.sendFile(path.join(__dirname, "Oman.html"))
        })
        Router.get('/Oman.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Oman.js"))
        })
        Router.get('/Oman.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Oman.css"))
        })
    }
    module.exports = Oman_Express;
    