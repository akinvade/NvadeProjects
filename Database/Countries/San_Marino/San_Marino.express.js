
    const fs = require('fs');
    const path = require('path');
    const data = require('./San_Marino.json');
    function San_Marino_Express(Router){
        Router.get('/San_Marino', (req, res) => {
            res.sendFile(path.join(__dirname, "San_Marino.html"))
        })
        Router.get('/San_Marino.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "San_Marino.js"))
        })
        Router.get('/San_Marino.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "San_Marino.css"))
        })
    }
    module.exports = San_Marino_Express;
    