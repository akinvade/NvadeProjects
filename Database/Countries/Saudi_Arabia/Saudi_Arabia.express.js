
    const fs = require('fs');
    const path = require('path');
    const data = require('./Saudi_Arabia.json');
    function Saudi_Arabia_Express(Router){
        Router.get('/Saudi_Arabia', (req, res) => {
            res.sendFile(path.join(__dirname, "Saudi_Arabia.html"))
        })
        Router.get('/Saudi_Arabia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Saudi_Arabia.js"))
        })
        Router.get('/Saudi_Arabia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Saudi_Arabia.css"))
        })
    }
    module.exports = Saudi_Arabia_Express;
    