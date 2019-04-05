//Model

var mongoose = require('mongoose'), 
Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;

var queueSchema = new Schema({
    "_id": ObjectId,
    "name": String,
    "email": String,
    "phone": {
        type: String,
        optional: true
    },
    "affiliation" : String,
    "major": String,
    "forACourse" : Boolean,
    "photoAllow": Boolean,
    "status": Number,
    "pickupLocation": {
        type: String,
        optional: true
    },
    "entryDate": String,
    "paymentDate": String
    }, {
        collection: "Queue"
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
