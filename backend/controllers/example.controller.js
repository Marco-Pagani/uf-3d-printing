/* Dependencies */
var mongoose = require('mongoose'), 
    example = require('../models/example.model.js');

exports.read = function(req, res) {
  /* send back the decals as json from the request */
  res.json(req.decal);
};

// Returns all decal permissions
exports.list = function(req, res) {
 example.find({}).sort({}).exec((err, docs) =>{
    if(err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.json(docs);
  });
};

// Returns passed decals permissions
exports.byName = function(req, res, next, name) {
  example.find({'id': name}).exec(function(err, item) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.item = item[0];
      next();
    }
  });
};
