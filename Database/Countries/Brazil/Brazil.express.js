
    const fs = require('fs');
    const path = require('path');
    const data = require('./Brazil.json');
    function Brazil_Express(Router){
        Router.get('/Brazil', (req, res) => {
            res.sendFile(path.join(__dirname, "Brazil.html"))
        })
        Router.get('/Brazil.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Brazil.js"))
        })
        Router.get('/Brazil.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Brazil.css"))
        })
    }
    module.exports = Brazil_Express;
    