
    const fs = require('fs');
    const path = require('path');
    const data = require('./Federated_States_of_Micronesia.json');
    function Federated_States_of_Micronesia_Express(Router){
        Router.get('/Federated_States_of_Micronesia', (req, res) => {
            res.sendFile(path.join(__dirname, "Federated_States_of_Micronesia.html"))
        })
        Router.get('/Federated_States_of_Micronesia.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Federated_States_of_Micronesia.js"))
        })
        Router.get('/Federated_States_of_Micronesia.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Federated_States_of_Micronesia.css"))
        })
    }
    module.exports = Federated_States_of_Micronesia_Express;
    