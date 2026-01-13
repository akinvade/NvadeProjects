
    const fs = require('fs');
    const path = require('path');
    const data = require('./Virgin_Islands__British_.json');
    function Virgin_Islands__British__Express(Router){
        Router.get('/Virgin_Islands__British_', (req, res) => {
            res.sendFile(path.join(__dirname, "Virgin_Islands__British_.html"))
        })
        Router.get('/Virgin_Islands__British_.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Virgin_Islands__British_.js"))
        })
        Router.get('/Virgin_Islands__British_.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Virgin_Islands__British_.css"))
        })
    }
    module.exports = Virgin_Islands__British__Express;
    