var app = require('express')(),
    bodyParser = require('body-parser'),
    wechat = require('./lib/wechat'),
    config = require('./lib/config');

app.use(bodyParser.urlencoded({
  extended: false,
}));

wechat(conf.wechat);

wechat.createMenu(require('./lib/menu.json'));

app.use('/wxapi', require('./lib/routers/wxapi.js'));

app.listen(8015, function(error) {
  console.log('listenning at 8015...');
});
