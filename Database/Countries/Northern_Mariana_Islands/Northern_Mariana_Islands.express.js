
    const fs = require('fs');
    const path = require('path');
    const data = require('./Northern_Mariana_Islands.json');
    function Northern_Mariana_Islands_Express(Router){
        Router.get('/Northern_Mariana_Islands', (req, res) => {
            res.sendFile(path.join(__dirname, "Northern_Mariana_Islands.html"))
        })
        Router.get('/Northern_Mariana_Islands.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Northern_Mariana_Islands.js"))
        })
        Router.get('/Northern_Mariana_Islands.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Northern_Mariana_Islands.css"))
        })
    }
    module.exports = Northern_Mariana_Islands_Express;
    