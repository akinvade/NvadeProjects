
    const fs = require('fs');
    const path = require('path');
    const data = require('./Pakistan.json');
    function Pakistan_Express(Router){
        Router.get('/Pakistan', (req, res) => {
            res.sendFile(path.join(__dirname, "Pakistan.html"))
        })
        Router.get('/Pakistan.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Pakistan.js"))
        })
        Router.get('/Pakistan.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Pakistan.css"))
        })
    }
    module.exports = Pakistan_Express;
    