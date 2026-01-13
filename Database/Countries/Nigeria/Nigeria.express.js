
    const fs = require('fs');
    const path = require('path');
    const data = require('./Nigeria.json');
    function Nigeria_Express(Router){
        Router.get('/Nigeria', (req, res) => {
            res.sendFile(path.join(__dirname, "Nigeria.html"))
        })
        Router.get('/Nigeria.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Nigeria.js"))
        })
        Router.get('/Nigeria.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Nigeria.css"))
        })
    }
    module.exports = Nigeria_Express;
    