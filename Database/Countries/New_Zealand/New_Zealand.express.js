
    const fs = require('fs');
    const path = require('path');
    const data = require('./New_Zealand.json');
    function New_Zealand_Express(Router){
        Router.get('/New_Zealand', (req, res) => {
            res.sendFile(path.join(__dirname, "New_Zealand.html"))
        })
        Router.get('/New_Zealand.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "New_Zealand.js"))
        })
        Router.get('/New_Zealand.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "New_Zealand.css"))
        })
    }
    module.exports = New_Zealand_Express;
    