
    const fs = require('fs');
    const path = require('path');
    const data = require('./Afghanistan.json');
    function Afghanistan_Express(Router){
        Router.get('/Afghanistan', (req, res) => {
            res.sendFile(path.join(__dirname, "Afghanistan.html"))
        })
        Router.get('/Afghanistan.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Afghanistan.js"))
        })
        Router.get('/Afghanistan.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Afghanistan.css"))
        })
    }
    module.exports = Afghanistan_Express;
    