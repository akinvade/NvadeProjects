
    const fs = require('fs');
    const path = require('path');
    const data = require('./Sierra_Leone.json');
    function Sierra_Leone_Express(Router){
        Router.get('/Sierra_Leone', (req, res) => {
            res.sendFile(path.join(__dirname, "Sierra_Leone.html"))
        })
        Router.get('/Sierra_Leone.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Sierra_Leone.js"))
        })
        Router.get('/Sierra_Leone.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Sierra_Leone.css"))
        })
    }
    module.exports = Sierra_Leone_Express;
    