
    const fs = require('fs');
    const path = require('path');
    const data = require('./Portugal.json');
    function Portugal_Express(Router){
        Router.get('/Portugal', (req, res) => {
            res.sendFile(path.join(__dirname, "Portugal.html"))
        })
        Router.get('/Portugal.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Portugal.js"))
        })
        Router.get('/Portugal.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Portugal.css"))
        })
    }
    module.exports = Portugal_Express;
    