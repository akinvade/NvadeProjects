
    const fs = require('fs');
    const path = require('path');
    const data = require('./French_Southern_and_Antarctic_Lands.json');
    function French_Southern_and_Antarctic_Lands_Express(Router){
        Router.get('/French_Southern_and_Antarctic_Lands', (req, res) => {
            res.sendFile(path.join(__dirname, "French_Southern_and_Antarctic_Lands.html"))
        })
        Router.get('/French_Southern_and_Antarctic_Lands.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "French_Southern_and_Antarctic_Lands.js"))
        })
        Router.get('/French_Southern_and_Antarctic_Lands.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "French_Southern_and_Antarctic_Lands.css"))
        })
    }
    module.exports = French_Southern_and_Antarctic_Lands_Express;
    