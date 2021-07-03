'use strict'

// var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 4000;


app.listen(port, () => {
    console.log('Servidor corriendo correctamente en el puerto: ', port);
});