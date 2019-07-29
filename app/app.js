const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const indexRouter = require('./router/index');
const colorRouter = require('./router/color');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.use('/', indexRouter);
app.use('/color', colorRouter);

app.listen(3000);