
    const fs = require('fs');
    const path = require('path');
    const data = require('./Isle_of_Man.json');
    function Isle_of_Man_Express(Router){
        Router.get('/Isle_of_Man', (req, res) => {
            res.sendFile(path.join(__dirname, "Isle_of_Man.html"))
        })
        Router.get('/Isle_of_Man.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Isle_of_Man.js"))
        })
        Router.get('/Isle_of_Man.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Isle_of_Man.css"))
        })
    }
    module.exports = Isle_of_Man_Express;
    