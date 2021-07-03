'user strict'

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

const app = express();
console.log('app corriendo ahora');

//middlewares de body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// app.use((req, res, next) => {
// 	res.header('Access-Control-Allow-Origin','*');
// 	res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Heade-Request-Method');
// 	res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
// 	res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
// 	next();
// });

app.use('/', express.static('client', {redirect: false}));
app.get('*', function(req, res, next) {
    res.sendFile(path.resolve('client/index.html'));
});

module.exports = app;