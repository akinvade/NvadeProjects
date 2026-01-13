
    const fs = require('fs');
    const path = require('path');
    const data = require('./Kuwait.json');
    function Kuwait_Express(Router){
        Router.get('/Kuwait', (req, res) => {
            res.sendFile(path.join(__dirname, "Kuwait.html"))
        })
        Router.get('/Kuwait.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Kuwait.js"))
        })
        Router.get('/Kuwait.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Kuwait.css"))
        })
    }
    module.exports = Kuwait_Express;
    