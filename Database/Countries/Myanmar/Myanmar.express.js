
    const fs = require('fs');
    const path = require('path');
    const data = require('./Myanmar.json');
    function Myanmar_Express(Router){
        Router.get('/Myanmar', (req, res) => {
            res.sendFile(path.join(__dirname, "Myanmar.html"))
        })
        Router.get('/Myanmar.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Myanmar.js"))
        })
        Router.get('/Myanmar.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Myanmar.css"))
        })
    }
    module.exports = Myanmar_Express;
    