
    const fs = require('fs');
    const path = require('path');
    const data = require('./Curaçao.json');
    function Curaçao_Express(Router){
        Router.get('/Curaçao', (req, res) => {
            res.sendFile(path.join(__dirname, "Curaçao.html"))
        })
        Router.get('/Curaçao.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Curaçao.js"))
        })
        Router.get('/Curaçao.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Curaçao.css"))
        })
    }
    module.exports = Curaçao_Express;
    