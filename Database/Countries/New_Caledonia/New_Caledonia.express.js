
    const fs = require('fs');
    const path = require('path');
    const data = require('./New_Caledonia.json');
    function New_Caledonia_Express(Router){
        Router.get('/New_Caledonia', (req, res) => {
            res.sendFile(path.join(__dirname, "New_Caledonia.html"))
        })
        Router.get('/New_Caledonia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "New_Caledonia.js"))
        })
        Router.get('/New_Caledonia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "New_Caledonia.css"))
        })
    }
    module.exports = New_Caledonia_Express;
    