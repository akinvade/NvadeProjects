
    const fs = require('fs');
    const path = require('path');
    const data = require('./South_Korea.json');
    function South_Korea_Express(Router){
        Router.get('/South_Korea', (req, res) => {
            res.sendFile(path.join(__dirname, "South_Korea.html"))
        })
        Router.get('/South_Korea.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "South_Korea.js"))
        })
        Router.get('/South_Korea.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "South_Korea.css"))
        })
    }
    module.exports = South_Korea_Express;
    