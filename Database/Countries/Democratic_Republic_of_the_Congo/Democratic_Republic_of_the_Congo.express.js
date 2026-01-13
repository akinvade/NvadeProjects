
    const fs = require('fs');
    const path = require('path');
    const data = require('./Democratic_Republic_of_the_Congo.json');
    function Democratic_Republic_of_the_Congo_Express(Router){
        Router.get('/Democratic_Republic_of_the_Congo', (req, res) => {
            res.sendFile(path.join(__dirname, "Democratic_Republic_of_the_Congo.html"))
        })
        Router.get('/Democratic_Republic_of_the_Congo.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Democratic_Republic_of_the_Congo.js"))
        })
        Router.get('/Democratic_Republic_of_the_Congo.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Democratic_Republic_of_the_Congo.css"))
        })
    }
    module.exports = Democratic_Republic_of_the_Congo_Express;
    