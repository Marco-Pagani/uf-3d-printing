//Model

var mongoose = require('mongoose'), 
Schema = mongoose.Schema;

var queueSchema = new Schema({
    "name": String,
    "email": String,
    "phone": {
    type: String,
    optional: ''
    },
    "affiliation" : String,
    "major": String,
    "forACourse" : Boolean,
    "photoAllow": Boolean,
    } 
    );

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
queueSchema.pre('save', function(next) {
    var currentTime = new Date;
    this.updated_at = currentTime;
    if(!this.created_at)
    {
    this.created_at = currentTime;
    }
    next();
    });


var queue = mongoose.model('queue', queueSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = queue;
