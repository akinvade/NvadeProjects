
    const fs = require('fs');
    const path = require('path');
    const data = require('./Burkina_Faso.json');
    function Burkina_Faso_Express(Router){
        Router.get('/Burkina_Faso', (req, res) => {
            res.sendFile(path.join(__dirname, "Burkina_Faso.html"))
        })
        Router.get('/Burkina_Faso.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Burkina_Faso.js"))
        })
        Router.get('/Burkina_Faso.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Burkina_Faso.css"))
        })
    }
    module.exports = Burkina_Faso_Express;
    