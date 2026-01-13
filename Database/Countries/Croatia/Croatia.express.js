
    const fs = require('fs');
    const path = require('path');
    const data = require('./Croatia.json');
    function Croatia_Express(Router){
        Router.get('/Croatia', (req, res) => {
            res.sendFile(path.join(__dirname, "Croatia.html"))
        })
        Router.get('/Croatia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Croatia.js"))
        })
        Router.get('/Croatia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Croatia.css"))
        })
    }
    module.exports = Croatia_Express;
    