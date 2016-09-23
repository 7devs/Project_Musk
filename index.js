var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: false,
}));

app.use('/wxapi', require('./lib/routers/wxapi.js'));

app.listen(8015, function(error) {
  console.log('listenning at 8015...');
});