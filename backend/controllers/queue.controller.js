
/* Dependencies */
var mongoose = require('mongoose'), 
    queue = require('../models/queue.model.js');

exports.read = function(req, res) {
  res.json(req.request);
};

// Returns all queue data
exports.list = function(req, res) {
    queue.find({}).sort({}).exec((err, docs) =>{
        if(err) {
            console.log(err);
            res.status(400).send(err);
        } else {
            res.json(docs);
        }
    });
};

// Returns all queue data that has not been picked up by employee
exports.listpending = function(req, res) {
    queue.find({'pending': true}).sort({}).exec((err, docs) =>{
        if(err) {
            console.log(err);
            res.status(400).send(err);
        } else {
            res.json(docs);
        }
    });
};

// Returns all queue data that has not been picked up by employee
exports.listmarston = function(req, res) {
    queue.find({'pickupLocation': 'Marston Science Library'}).sort({}).exec((err, docs) =>{
        if(err) {
            console.log(err);
            res.status(400).send(err);
        } else {
            res.json(docs);
        }
    });
};

// Returns all queue data that has not been picked up by employee
exports.listhealth = function(req, res) {
    queue.find({'pickupLocation': 'Health Science Center'}).sort({}).exec((err, docs) =>{
        if(err) {
            console.log(err);
            res.status(400).send(err);
        } else {
            res.json(docs);
        }
    });
};

// Returns all queue data that has not been picked up by employee
exports.listeducation = function(req, res) {
    queue.find({'pickupLocation': 'Education Library'}).sort({}).exec((err, docs) =>{
        if(err) {
            console.log(err);
            res.status(400).send(err);
        } else {
            res.json(docs);
        }
    });
};

// Creates an article
exports.create = function (req, res) {
    var q = new queue(req.body);
  
    q.save(function (err) {
        if (err) {
            console.log(err);
            res.status(400).send('Could not create!');
        } else {
            res.json('Created successfully!');
        }
    });
  };

  
// Updates a queue entry
exports.update = function (req, res) {
    queue.update({'_id':req.request._id}, req.body, (err, result) => {
        if (err) {
            console.log(err);
            res.status(400).send('Could not update!');
        } else {
            res.status(200).send('Updated!');
        }
    });
        
};
  
//Deletes a queue entry
//Not sure if we will need to delete stuff, but good to have
exports.delete = function (req, res) {
    queue.findOneAndDelete({'_id': req.request._id}, (err, result) => {
        if (err) {
            console.log(err);
            res.status(400).send('Could not delete!');
        } else {
            res.status(200).send(req.request.id + ' deleted!');
        }
    });
};


// Returns passed example by name
exports.findById = function(req, res, next, id) {
    queue.findOne({'_id': id}).exec(function(err, request) {
      if(err) {
        res.status(400).send(err);
      } else {
        req.request = request;
        next();
      }
    });
  };
  