
    const fs = require('fs');
    const path = require('path');
    const data = require('./Cocos__Keeling__Islands.json');
    function Cocos__Keeling__Islands_Express(Router){
        Router.get('/Cocos__Keeling__Islands', (req, res) => {
            res.sendFile(path.join(__dirname, "Cocos__Keeling__Islands.html"))
        })
        Router.get('/Cocos__Keeling__Islands.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Cocos__Keeling__Islands.js"))
        })
        Router.get('/Cocos__Keeling__Islands.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Cocos__Keeling__Islands.css"))
        })
    }
    module.exports = Cocos__Keeling__Islands_Express;
    