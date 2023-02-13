var express = require('express');
var router = express.Router();

/* GET orders listing. */
router.get('/', function(req, res, next) {

  // Unchangable order objects that have topping and quantity as properties
  const ordersArray = [{topping: 'cherry', quantity: 2}, {topping: 'plain', quantity: 6}, {topping: "chocolate", quantity: 3}];


  //after constructing the array, convert the response type to JSON format
  res.setHeader('Content-Type', 'application/json');


  /* now, we use JSON.stringify to convert the objects object into JSON string and then it
   is sent as the response:
   res - response
   send - send to client
   stringify - convert objects into JSON string
   ordersArray - array of objects
   */
  res.send(JSON.stringify(ordersArray));

});

module.exports = router;