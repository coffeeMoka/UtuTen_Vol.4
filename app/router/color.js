const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', function(req, res) {
    let html = fs.readFileSync("./app/public/color_temp.html", 'utf-8', function(err, data){
        if(err) { throw err; }
        html = data;
    });
    res.send(html);
});

module.exports = router;