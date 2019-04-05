
/* Dependencies */
var mongoose = require('mongoose'), 
    queue = require('../models/queue.model.js');

exports.read = function(req, res) {
  res.json(req.item);
};

// Returns all queue data
exports.list = function(req, res) {
 queue.find({}).sort({}).exec((err, docs) =>{
    if(err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.json(docs);
  });
};

// Returns passed queue by name
exports.byName = function(req, res, next, name) {
  queue.find({'id': name}).exec(function(err, item) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.item = item[0];
      next();
    }
  });
};

// Creates an article
exports.create = function (req, res) {
    var q = new queue(req.body);
  
    q.save(function (err) {
      if (err) {
        return res.status(422).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
        res.json(q);
      }
    });
  };

  
// Updates a queue entry
exports.update = function (req, res) {
    var q = req.queue;
    q.name = req.body.name;
    q.email= req.body.email;
    q.phone = req.body.phone;
    q.affiliation = req.body.affiliation;
    q.major = req.body.major;
    q.forACourse = req.body.forACourse;
    q.photoAllow = req.body.photoAllow;

    q.save(function (err) {
        if (err) {
        return res.status(422).send({
            message: errorHandler.getErrorMessage(err)
        });
        } else {
        res.json(q);
        }
    });
};
  
  //Deletes a queue entry
  //Not sure if we will need to delete stuff, but good to have
  exports.delete = function (req, res) {
    var q = req.queue;
  
    q.remove(function (err) {
      if (err) {
        return res.status(422).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
        res.json(q);
      }
    });
  };