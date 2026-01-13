
    const fs = require('fs');
    const path = require('path');
    const data = require('./Lebanon.json');
    function Lebanon_Express(Router){
        Router.get('/Lebanon', (req, res) => {
            res.sendFile(path.join(__dirname, "Lebanon.html"))
        })
        Router.get('/Lebanon.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Lebanon.js"))
        })
        Router.get('/Lebanon.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Lebanon.css"))
        })
    }
    module.exports = Lebanon_Express;
    