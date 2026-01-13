
    const fs = require('fs');
    const path = require('path');
    const data = require('./Iraq.json');
    function Iraq_Express(Router){
        Router.get('/Iraq', (req, res) => {
            res.sendFile(path.join(__dirname, "Iraq.html"))
        })
        Router.get('/Iraq.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Iraq.js"))
        })
        Router.get('/Iraq.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Iraq.css"))
        })
    }
    module.exports = Iraq_Express;
    