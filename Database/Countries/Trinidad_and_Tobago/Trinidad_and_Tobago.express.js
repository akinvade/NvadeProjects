
    const fs = require('fs');
    const path = require('path');
    const data = require('./Trinidad_and_Tobago.json');
    function Trinidad_and_Tobago_Express(Router){
        Router.get('/Trinidad_and_Tobago', (req, res) => {
            res.sendFile(path.join(__dirname, "Trinidad_and_Tobago.html"))
        })
        Router.get('/Trinidad_and_Tobago.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Trinidad_and_Tobago.js"))
        })
        Router.get('/Trinidad_and_Tobago.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Trinidad_and_Tobago.css"))
        })
    }
    module.exports = Trinidad_and_Tobago_Express;
    