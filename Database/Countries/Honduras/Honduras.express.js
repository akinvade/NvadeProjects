
    const fs = require('fs');
    const path = require('path');
    const data = require('./Honduras.json');
    function Honduras_Express(Router){
        Router.get('/Honduras', (req, res) => {
            res.sendFile(path.join(__dirname, "Honduras.html"))
        })
        Router.get('/Honduras.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Honduras.js"))
        })
        Router.get('/Honduras.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Honduras.css"))
        })
    }
    module.exports = Honduras_Express;
    