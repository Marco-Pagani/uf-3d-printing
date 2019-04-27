
/* Dependencies */
var mongoose = require('mongoose'), 
    queue = require('../models/queue.model.js'),
    file = require('../models/file.model.js');

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

exports.listfiles = async function(req, res) {
    request = req.request.toObject(); 
    files = request.files;
    if(files.length > 0 && files != "[]") {
        files = await Promise.all(files.map((ele) => {
            return mongoose.Types.ObjectId(ele);
        }));
        file.find({ '_id': { $in: files } }).exec((err, docs) => {
            if(err) {
                console.log(err);
                res.status(400).send(err);
            } else {
                res.json(docs);
            }
        });
    }
}

// Returns all queue data that has not been picked up by employee
exports.listpending = function(req, res) {
    queue.find({'makerLoc': ''}).sort({}).exec((err, docs) =>{
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
    queue.find({'makerLoc': 'Marston Science Library'}).sort({}).exec((err, docs) =>{
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
    queue.find({'makerLoc': 'Health Science Center'}).sort({}).exec((err, docs) =>{
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
    queue.find({'makerLoc': 'Education Library'}).sort({}).exec((err, docs) =>{
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
            res.status(200).send({text:'Created successfully!'});
        }
    });
  };

  
// Updates a queue entry
exports.update = function (req, res) {
    const today = new Date();
    req.body.updateDate = `${today.getUTCFullYear()}-0${today.getMonth() + 1}-${today.getDay() < 10 ? '0' + today.getDay() : today.getDay()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    queue.update({'_id':req.body._id}, req.body, (err, result) => {
        if (err) {
            console.log(err);
            res.status(400).send('Could not update!');
        } else {
            res.status(200).send({text:'Updated!'});
        }
    });
        
};
  
//Deletes a queue entry
//Not sure if we will need to delete stuff, but good to have
exports.delete = function (req, res) {
    queue.findOneAndDelete({'_id': req.request._id}, (err, result) => {
        if (err) {
            console.log(err);
            res.status(400).send({error:'Could not delete!'});
        } else {
            res.status(200).send({text:req.request.id + ' deleted!'});
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
  