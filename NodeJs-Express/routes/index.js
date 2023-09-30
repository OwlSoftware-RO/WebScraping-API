var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* WEB API */
router.post('/', (req, res) => {
  res.send('<p>Got a POST request</p>')
})
 
module.exports = router;
