
    const fs = require('fs');
    const path = require('path');
    const data = require('./Virgin_Islands__U_S__.json');
    function Virgin_Islands__U_S___Express(Router){
        Router.get('/Virgin_Islands__U_S__', (req, res) => {
            res.sendFile(path.join(__dirname, "Virgin_Islands__U_S__.html"))
        })
        Router.get('/Virgin_Islands__U_S__.scripts', (req, res) => {
            res.sendFile(path.join(__dirname, "Javascripts", "Virgin_Islands__U_S__.js"))
        })
        Router.get('/Virgin_Islands__U_S__.css', (req, res) => {
            res.sendFile(path.join(__dirname, "StyleSheets", "Virgin_Islands__U_S__.css"))
        })
    }
    module.exports = Virgin_Islands__U_S___Express;
    