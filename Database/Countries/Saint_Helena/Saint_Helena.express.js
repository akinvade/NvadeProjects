
    const fs = require('fs');
    const path = require('path');
    const data = require('./Saint_Helena.json');
    function Saint_Helena_Express(Router){
        Router.get('/Saint_Helena', (req, res) => {
            res.sendFile(path.join(__dirname, "Saint_Helena.html"))
        })
        Router.get('/Saint_Helena.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Saint_Helena.js"))
        })
        Router.get('/Saint_Helena.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Saint_Helena.css"))
        })
    }
    module.exports = Saint_Helena_Express;
    