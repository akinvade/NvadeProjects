
    const fs = require('fs');
    const path = require('path');
    const data = require('./Bermuda.json');
    function Bermuda_Express(Router){
        Router.get('/Bermuda', (req, res) => {
            res.sendFile(path.join(__dirname, "Bermuda.html"))
        })
        Router.get('/Bermuda.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Bermuda.js"))
        })
        Router.get('/Bermuda.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Bermuda.css"))
        })
    }
    module.exports = Bermuda_Express;
    