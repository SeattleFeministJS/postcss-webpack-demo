var Express = require('express');
var app = new Express();
var path = require('path');
var bodyParser = require('body-parser');
var publicPath = path.join(__dirname, '/public/');

app.get('/', function(request, response){
  response.sendFile(publicPath + 'index.html');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(Express.static(publicPath));


app.listen(8080);

console.log('Express server listening on port 8080');
