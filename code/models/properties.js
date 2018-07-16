var db = require('../dbconnection');

var query = db.query(
    'SELECT * FROM properties_sample',function(err, result, fields) {
        if (err) throw err;
        if(result.length > 0) {
            properties = result;
        } else {
            properties = null;
        }
        //properties = JSON.stringify(properties);
        console.log('result: ', properties);        //Result is an object containing properties
        
});

/* var querytwo = db.query(
    "SELECT * FROM properties_sample WHERE lotplan = '215SP192046'",function(err, result, fields) {
        if (err) throw err;
        if(result.length > 0) {
            test = result;
        } else {
            test = null;
        }
        //properties = JSON.stringify(properties);
        console.log('Test result: ', test);        //Result is an object containing properties
        
}); */

module.exports = query;