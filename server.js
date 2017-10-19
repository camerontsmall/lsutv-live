

/* Load server config */

var config = require('./config.json');

const http = require('http');
const express = require('express');


/* Init server */

var app = express();

var server = http.createServer(app);

/* Enable CORS so we can use CDN resources */

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(express.static('public'));

if(Number.isInteger(config.port) == true){
    
      /* Start server */
      server.listen(config.port, function () {
        console.log('Listening on port ' + config.port);
      });
    
    }