
    const fs = require('fs');
    const path = require('path');
    const data = require('./Bosnia_and_Herzegovina.json');
    function Bosnia_and_Herzegovina_Express(Router){
        Router.get('/Bosnia_and_Herzegovina', (req, res) => {
            res.sendFile(path.join(__dirname, "Bosnia_and_Herzegovina.html"))
        })
        Router.get('/Bosnia_and_Herzegovina.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Bosnia_and_Herzegovina.js"))
        })
        Router.get('/Bosnia_and_Herzegovina.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Bosnia_and_Herzegovina.css"))
        })
    }
    module.exports = Bosnia_and_Herzegovina_Express;
    