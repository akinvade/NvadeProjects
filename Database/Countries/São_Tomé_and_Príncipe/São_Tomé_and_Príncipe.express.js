
    const fs = require('fs');
    const path = require('path');
    const data = require('./São_Tomé_and_Príncipe.json');
    function São_Tomé_and_Príncipe_Express(Router){
        Router.get('/São_Tomé_and_Príncipe', (req, res) => {
            res.sendFile(path.join(__dirname, "São_Tomé_and_Príncipe.html"))
        })
        Router.get('/São_Tomé_and_Príncipe.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "São_Tomé_and_Príncipe.js"))
        })
        Router.get('/São_Tomé_and_Príncipe.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "São_Tomé_and_Príncipe.css"))
        })
    }
    module.exports = São_Tomé_and_Príncipe_Express;
    