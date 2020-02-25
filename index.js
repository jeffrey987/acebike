var express = require('express');
var path = require('path');
var app = express();
 
app.use(express.static(path.join(__dirname, 'public')));
 
app.listen(8081, function() {
 console.log('App listening at port 8081;');
});