
    const fs = require('fs');
    const path = require('path');
    const data = require('./South_Georgia.json');
    function South_Georgia_Express(Router){
        Router.get('/South_Georgia', (req, res) => {
            res.sendFile(path.join(__dirname, "South_Georgia.html"))
        })
        Router.get('/South_Georgia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "South_Georgia.js"))
        })
        Router.get('/South_Georgia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "South_Georgia.css"))
        })
    }
    module.exports = South_Georgia_Express;
    