var express = require('express');
var app = express();
// default path
app.get('/', function (req, res) {
  res.send('--- Hello World! ---');
});

//单个回调函数可以处理一个路由
app.get('/example/a', function (req, res) {
  res.send('Hello from A!');
});

//多个回调函数可以处理一个路由（确保您指定 next 对象）
app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from B!');
});


//一组回调函数可以处理一个路由
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from C!');
}

app.get('/example/c', [cb0, cb1, cb2]);


//独立函数与一组函数的组合可以处理一个路由
app.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})