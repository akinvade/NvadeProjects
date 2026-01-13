
    const fs = require('fs');
    const path = require('path');
    const data = require('./India.json');
    function India_Express(Router){
        Router.get('/India', (req, res) => {
            res.sendFile(path.join(__dirname, "India.html"))
        })
        Router.get('/India.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "India.js"))
        })
        Router.get('/India.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "India.css"))
        })
    }
    module.exports = India_Express;
    