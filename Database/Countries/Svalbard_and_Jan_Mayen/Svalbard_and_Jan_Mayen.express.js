
    const fs = require('fs');
    const path = require('path');
    const data = require('./Svalbard_and_Jan_Mayen.json');
    function Svalbard_and_Jan_Mayen_Express(Router){
        Router.get('/Svalbard_and_Jan_Mayen', (req, res) => {
            res.sendFile(path.join(__dirname, "Svalbard_and_Jan_Mayen.html"))
        })
        Router.get('/Svalbard_and_Jan_Mayen.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Svalbard_and_Jan_Mayen.js"))
        })
        Router.get('/Svalbard_and_Jan_Mayen.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Svalbard_and_Jan_Mayen.css"))
        })
    }
    module.exports = Svalbard_and_Jan_Mayen_Express;
    