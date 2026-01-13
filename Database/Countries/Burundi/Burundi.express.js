
    const fs = require('fs');
    const path = require('path');
    const data = require('./Burundi.json');
    function Burundi_Express(Router){
        Router.get('/Burundi', (req, res) => {
            res.sendFile(path.join(__dirname, "Burundi.html"))
        })
        Router.get('/Burundi.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Burundi.js"))
        })
        Router.get('/Burundi.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Burundi.css"))
        })
    }
    module.exports = Burundi_Express;
    