
    const fs = require('fs');
    const path = require('path');
    const data = require('./Kenya.json');
    function Kenya_Express(Router){
        Router.get('/Kenya', (req, res) => {
            res.sendFile(path.join(__dirname, "Kenya.html"))
        })
        Router.get('/Kenya.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Kenya.js"))
        })
        Router.get('/Kenya.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Kenya.css"))
        })
    }
    module.exports = Kenya_Express;
    