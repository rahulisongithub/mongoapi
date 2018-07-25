var express = require('express');
var apiRouter = express.Router();

var Product = require('../../../businessObjects/product.js');

apiRouter.get('/', function(req, res) {
  var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
  };
Product.find(onSuccess);
});

apiRouter.get('/:id', function(req, res) {
    var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
    };
  var query={productId:req.params.id};
 Product.findOne(query,onSuccess);
});

apiRouter.post('/', function(req, res) {
  var onSuccess=function (err, data) {
   if (err) {console.log("error occured!");}
    res.json(data);
  };
   var newProduct=req.body;
   Product.create(newProduct, onSuccess);
});

apiRouter.put('/:id', function(req, res) {
  
    var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
    };
  var query={productId:req.params.id};

  Product.findOneAndUpdate(query, req.body,onSuccess);
});

apiRouter.delete('/:id', function(req, res) {
  
  var onSuccess=function (err, data) {
  if (err) {console.log("error occured!");}
    res.json(data);
  };

  var query={productId:req.params.id};
  var theYield=req.body;
Product.findOneAndRemove(query,theYield,onSuccess);
});

module.exports = apiRouter;