
    const fs = require('fs');
    const path = require('path');
    const data = require('./French_Polynesia.json');
    function French_Polynesia_Express(Router){
        Router.get('/French_Polynesia', (req, res) => {
            res.sendFile(path.join(__dirname, "French_Polynesia.html"))
        })
        Router.get('/French_Polynesia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "French_Polynesia.js"))
        })
        Router.get('/French_Polynesia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "French_Polynesia.css"))
        })
    }
    module.exports = French_Polynesia_Express;
    