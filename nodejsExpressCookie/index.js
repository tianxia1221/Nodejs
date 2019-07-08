var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();


app.use(cookieParser());

app.use(function (req, res, next) {
  console.log('1 app.use(function (req, res, next) {');
  console.log(req.cookies.nick); // 第二次访问，输出rose
  next();
});

// app.use(function (req, res, next) {
//   req.cookies = cookie.parse(req.headers.cookie);
 
//   console.log('3 app.use(function (req, res, next) {');
//   next();
// });

app.use(function (req, res, next) {  
  console.log('2 app.use(function (req, res, next) {');
  res.cookie('nick', 'rose');
  res.end('ok');
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})