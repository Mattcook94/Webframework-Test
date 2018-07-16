var express = require('express');
var router = express.Router();
var db1 = require('../dbconnection');
var db = require('../models/properties');

/* GET home page. */
router.get('/', function(req, res, next) {
/*   var query = db1.query('SELECT * FROM properties_sample',function(err, result, fields) {
        if (err) throw err; */
  
  res.render('index', { 
    title: 'Rezone',
    properties: db.query
  });
});

/*  */
router.get('/:query', function(req, res, next) {
  res.render('index', { title: 'Rezone', output: req.params.query});
});

/*  */
router.post('/submit', function(req, res, next) {
  var lotplan = req.body.lotplan;
  var query = db1.query(
    "SELECT * FROM properties_sample WHERE lotplan = '215SP192046'",function(err, result, fields) {
        if (err) throw err;
        if(result.length > 0) {
            query = result;
        } else {
            query = null;
        }
        //query = JSON.stringify(query);
        console.log('Test result: ', query);        //Result is an object containing properties
});
  res.redirect('/' + query);
});


module.exports = router;