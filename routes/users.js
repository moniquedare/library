var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Estamos na rota users');
});


router.get('/sol', function(req, res, next) {
  res.send('Estamos no verão!');
});


router.get('/frio', function(req, res, next) {
  res.send('Estamos no inverno!');
});

router.get('/cool', function(req, res, next) {
  res.send('você é tão legal')
});
module.exports = router;
