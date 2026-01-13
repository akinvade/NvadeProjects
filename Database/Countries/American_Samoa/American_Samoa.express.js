
    const fs = require('fs');
    const path = require('path');
    const data = require('./American_Samoa.json');
    function American_Samoa_Express(Router){
        Router.get('/American_Samoa', (req, res) => {
            res.sendFile(path.join(__dirname, "American_Samoa.html"))
        })
        Router.get('/American_Samoa.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "American_Samoa.js"))
        })
        Router.get('/American_Samoa.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "American_Samoa.css"))
        })
    }
    module.exports = American_Samoa_Express;
    