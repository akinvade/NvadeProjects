
    const fs = require('fs');
    const path = require('path');
    const data = require('./French_Guiana.json');
    function French_Guiana_Express(Router){
        Router.get('/French_Guiana', (req, res) => {
            res.sendFile(path.join(__dirname, "French_Guiana.html"))
        })
        Router.get('/French_Guiana.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "French_Guiana.js"))
        })
        Router.get('/French_Guiana.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "French_Guiana.css"))
        })
    }
    module.exports = French_Guiana_Express;
    