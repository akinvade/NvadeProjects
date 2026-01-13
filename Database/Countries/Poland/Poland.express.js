
    const fs = require('fs');
    const path = require('path');
    const data = require('./Poland.json');
    function Poland_Express(Router){
        Router.get('/Poland', (req, res) => {
            res.sendFile(path.join(__dirname, "Poland.html"))
        })
        Router.get('/Poland.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Poland.js"))
        })
        Router.get('/Poland.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Poland.css"))
        })
    }
    module.exports = Poland_Express;
    