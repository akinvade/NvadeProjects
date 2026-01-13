
    const fs = require('fs');
    const path = require('path');
    const data = require('./United_States_Minor_Outlying_Islands.json');
    function United_States_Minor_Outlying_Islands_Express(Router){
        Router.get('/United_States_Minor_Outlying_Islands', (req, res) => {
            res.sendFile(path.join(__dirname, "United_States_Minor_Outlying_Islands.html"))
        })
        Router.get('/United_States_Minor_Outlying_Islands.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "United_States_Minor_Outlying_Islands.js"))
        })
        Router.get('/United_States_Minor_Outlying_Islands.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "United_States_Minor_Outlying_Islands.css"))
        })
    }
    module.exports = United_States_Minor_Outlying_Islands_Express;
    