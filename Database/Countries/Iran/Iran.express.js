
    const fs = require('fs');
    const path = require('path');
    const data = require('./Iran.json');
    function Iran_Express(Router){
        Router.get('/Iran', (req, res) => {
            res.sendFile(path.join(__dirname, "Iran.html"))
        })
        Router.get('/Iran.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Iran.js"))
        })
        Router.get('/Iran.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Iran.css"))
        })
    }
    module.exports = Iran_Express;
    