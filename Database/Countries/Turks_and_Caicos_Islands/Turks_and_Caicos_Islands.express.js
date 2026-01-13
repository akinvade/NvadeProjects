
    const fs = require('fs');
    const path = require('path');
    const data = require('./Turks_and_Caicos_Islands.json');
    function Turks_and_Caicos_Islands_Express(Router){
        Router.get('/Turks_and_Caicos_Islands', (req, res) => {
            res.sendFile(path.join(__dirname, "Turks_and_Caicos_Islands.html"))
        })
        Router.get('/Turks_and_Caicos_Islands.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Turks_and_Caicos_Islands.js"))
        })
        Router.get('/Turks_and_Caicos_Islands.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Turks_and_Caicos_Islands.css"))
        })
    }
    module.exports = Turks_and_Caicos_Islands_Express;
    