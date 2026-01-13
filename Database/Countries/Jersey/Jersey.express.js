
    const fs = require('fs');
    const path = require('path');
    const data = require('./Jersey.json');
    function Jersey_Express(Router){
        Router.get('/Jersey', (req, res) => {
            res.sendFile(path.join(__dirname, "Jersey.html"))
        })
        Router.get('/Jersey.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Jersey.js"))
        })
        Router.get('/Jersey.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Jersey.css"))
        })
    }
    module.exports = Jersey_Express;
    