
    const fs = require('fs');
    const path = require('path');
    const data = require('./Papua_New_Guinea.json');
    function Papua_New_Guinea_Express(Router){
        Router.get('/Papua_New_Guinea', (req, res) => {
            res.sendFile(path.join(__dirname, "Papua_New_Guinea.html"))
        })
        Router.get('/Papua_New_Guinea.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Papua_New_Guinea.js"))
        })
        Router.get('/Papua_New_Guinea.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Papua_New_Guinea.css"))
        })
    }
    module.exports = Papua_New_Guinea_Express;
    