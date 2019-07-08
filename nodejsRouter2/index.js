var express = require('express');
var app = express();

var router = express.Router();
var routerT = express.Router();
var routerSub = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

// middleware that is specific to this router
routerT.use(function timeLog(req, res, next) {
  console.log('---Time: ', Date.now());
  next();
});
// define the home page route
routerT.get('/', function(req, res) {
  res.send('---Birds home page');
});
// define the about route
routerT.get('/about', function(req, res) {
  res.send('---About birds');
});


// define the about route
routerSub.get('/sub', function(req, res) {
  res.status(500).send('Something broke!');
  // res.send('---&&& sub About birds');
});

router.use('/sublevel', routerSub);

app.use('/birds', router);
app.use('/temp', routerT);


// default path
app.get('/', function (req, res) {
  res.send('--- Hello World! ---');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})