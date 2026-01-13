
    const fs = require('fs');
    const path = require('path');
    const data = require('./Georgia.json');
    function Georgia_Express(Router){
        Router.get('/Georgia', (req, res) => {
            res.sendFile(path.join(__dirname, "Georgia.html"))
        })
        Router.get('/Georgia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Georgia.js"))
        })
        Router.get('/Georgia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Georgia.css"))
        })
    }
    module.exports = Georgia_Express;
    