
    const fs = require('fs');
    const path = require('path');
    const data = require('./Saint_Pierre_and_Miquelon.json');
    function Saint_Pierre_and_Miquelon_Express(Router){
        Router.get('/Saint_Pierre_and_Miquelon', (req, res) => {
            res.sendFile(path.join(__dirname, "Saint_Pierre_and_Miquelon.html"))
        })
        Router.get('/Saint_Pierre_and_Miquelon.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Saint_Pierre_and_Miquelon.js"))
        })
        Router.get('/Saint_Pierre_and_Miquelon.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Saint_Pierre_and_Miquelon.css"))
        })
    }
    module.exports = Saint_Pierre_and_Miquelon_Express;
    