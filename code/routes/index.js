var express = require('express');
var router = express.Router();
var db = require('../dbconnection');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Rezone',
  });
});


/*  Fetch individual lot & property address*/
router.get('/searchaddress', function(req, res, next) {
  var a = req.query.address;
  console.log("Address found:" + a);
  var sql = `SELECT * FROM address_sample WHERE address = '${a}'`;
  var query = db.query(sql,function(err, addressresult, fields) {
      if (err) throw err; 
       //query = JSON.stringify(query);
       console.log('Address fetched: ', addressresult);        //Result is the object
       var lotplanreference = addressresult[0].LOTPLAN;
       var sql = `SELECT * FROM properties_sample WHERE lotplan = '${lotplanreference}'`;
       var query = db.query(sql,function(err, lotplanresult, fields) {
          if (err) throw err; 
          //query = JSON.stringify(query);
          console.log('Lotplan fetched: ', lotplanresult);
          res.render('index', { 
          title: 'Rezone',
          address: addressresult[0].ADDRESS,
          cityplace: addressresult[0].CITY_PLACE,
          state: addressresult[0].STATE,
          lotplan: addressresult[0].LOTPLAN,
          wkt2: lotplanresult[0].WKT,
          lot_area: lotplanresult[0].LOT_AREA
          });
      });
  });
  
});


module.exports = router;


/*  Fetch individual LOTPLAN address*/
/*  router.get('/searchlotplan', function(req, res, next) {
   var a = req.query.q;

   var sql = `SELECT * FROM properties_sample WHERE lotplan = '${a}'`;
   var query = db.query(sql,function(err, result, fields) {
       if (err) throw err; 
        //query = JSON.stringify(query);
        console.log('Lotplan fetched: ', result);        //Result is the object
        res.render('index', { 
         title: 'Rezone',
         lot: result[0].LOT,
         lot_area: result[0].LOT_AREA,
         locality: result[0].LOCALITY,
         wkt: result[0].WKT
      });
   });
}); */