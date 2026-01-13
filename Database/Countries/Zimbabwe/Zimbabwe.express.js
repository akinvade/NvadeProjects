
    const fs = require('fs');
    const path = require('path');
    const data = require('./Zimbabwe.json');
    function Zimbabwe_Express(Router){
        Router.get('/Zimbabwe', (req, res) => {
            res.sendFile(path.join(__dirname, "Zimbabwe.html"))
        })
        Router.get('/Zimbabwe.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Zimbabwe.js"))
        })
        Router.get('/Zimbabwe.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Zimbabwe.css"))
        })
    }
    module.exports = Zimbabwe_Express;
    