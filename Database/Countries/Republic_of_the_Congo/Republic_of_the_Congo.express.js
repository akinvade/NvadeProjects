
    const fs = require('fs');
    const path = require('path');
    const data = require('./Republic_of_the_Congo.json');
    function Republic_of_the_Congo_Express(Router){
        Router.get('/Republic_of_the_Congo', (req, res) => {
            res.sendFile(path.join(__dirname, "Republic_of_the_Congo.html"))
        })
        Router.get('/Republic_of_the_Congo.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Republic_of_the_Congo.js"))
        })
        Router.get('/Republic_of_the_Congo.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Republic_of_the_Congo.css"))
        })
    }
    module.exports = Republic_of_the_Congo_Express;
    