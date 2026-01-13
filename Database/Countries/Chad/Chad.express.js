
    const fs = require('fs');
    const path = require('path');
    const data = require('./Chad.json');
    function Chad_Express(Router){
        Router.get('/Chad', (req, res) => {
            res.sendFile(path.join(__dirname, "Chad.html"))
        })
        Router.get('/Chad.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Chad.js"))
        })
        Router.get('/Chad.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Chad.css"))
        })
    }
    module.exports = Chad_Express;
    