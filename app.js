
var express = require('express');
var appempic = require('./lib/appempic');
var app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World '+ appempic.getName() + " " + appempic.getLastName());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
