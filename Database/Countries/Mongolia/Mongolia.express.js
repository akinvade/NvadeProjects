
    const fs = require('fs');
    const path = require('path');
    const data = require('./Mongolia.json');
    function Mongolia_Express(Router){
        Router.get('/Mongolia', (req, res) => {
            res.sendFile(path.join(__dirname, "Mongolia.html"))
        })
        Router.get('/Mongolia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Mongolia.js"))
        })
        Router.get('/Mongolia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Mongolia.css"))
        })
    }
    module.exports = Mongolia_Express;
    