var fs = require('fs');
var express = require('express');
var app = express();
var PORT = 3001;

app.listen(PORT, function() {
    console.log('The server\'s listening on port: ', PORT);
});
