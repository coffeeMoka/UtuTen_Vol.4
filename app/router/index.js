const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', function(req, res) {
    let html = fs.readFileSync("./app/public/index_temp.html", 'utf-8', function(err, data){
        if(err) { throw err; }
        html = data;
    });
    res.send(html);
});

module.exports = router;